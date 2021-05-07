<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

use App\Models\Payment;
use App\Models\BankAccount;
use App\Models\User;
use App\Models\Lookup;

class DashboardController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('auth');
        $this->middleware('permission');
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();

        if($user->bank_account == null){
            $bank = [];
            $bankExist = false;
        }else{
            $bankExist = true;
            $bank = DB::table('bank_accounts as bank')
            ->where('bank.user_id', $user->id)
            ->select(
                'branch_name as branchName', 
                'bank as bankName',
                'current_balance as currentBalance',
                'account_number as accountNumber',
                'account_name as accountName',
                'account_type as accountType'
            )->first();
        }



        if($user->role == 'admin'){
            $payment = DB::table('payments as payment')
            ->leftJoin('users as user', 'payment.user_id', 'user.id')
            ->leftJoin('bank_accounts as bank', 'bank.user_id', 'user.id')
            ->select(
                'status',
                'user.id as userId',
                'user.grade as grade',
                'requested_at as requestedAt',
                'accepted_at as acceptedAt',
                'name as userName',
                'bank.id as bankId',
                'bank.bank as bankName',
                'payment.id as paymentId'
            )
            ->get();
        }
        if($user->role == 'employee'){
            $payment = DB::table('payments as payment')
            ->where('payment.user_id', $user->id)
            ->select('status', 'user_id', 'requested_at as requestedAt', 'accepted_at as acceptedAt','id as paymentId')
            ->get();
        }

        $lowGradeBasic = Lookup::where('name', 'lowGradeBasic')->first();
        if($lowGradeBasic == null){$lowGradeBasic = 0;}else{$lowGradeBasic = $lowGradeBasic->value;}

        $paymentPending = array();
        $paymentAccepted = array();

        foreach($payment as $v){
            if($user->role == 'admin'){
                $salary = $this->salary($lowGradeBasic, $v->grade, 6);
                $v->salary = $salary;
            }
            if($user->role == 'employee'){
                $salary = $this->salary($lowGradeBasic, $user->grade, 6);
                $v->salary = $salary;
                $v->userName = $user->name;
            }
            if($v->status == 'pending'){
                $paymentPending[]=$v;
            }else{
                $paymentAccepted[]=$v;
            }
        }

        return response()->json([
            'status' => 200,
            'user' => $user,
            'bankExist' => $bankExist,
            'bank' => $bank,
            'paymentPending' => $paymentPending,
            'paymentAccepted' => $paymentAccepted,
        ],200);

    }
    public function salary($lowestBasic, $grade, $totalGrade){
        $basic = $lowestBasic*($totalGrade-$grade+1);
        $houseRent = $basic*.2;
        $medicalAllowance = $basic*.15;
        $total = $basic+$houseRent+$medicalAllowance;

        return [
            'basic' => round($basic,2),
            'houseRent' => round($houseRent,2),
            'medicalAllowance' => round($medicalAllowance,2),
            'total' => round($total,2),
            'grade' => $grade,
        ];
    }

}
