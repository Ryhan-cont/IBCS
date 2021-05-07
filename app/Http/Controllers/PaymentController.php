<?php

namespace App\Http\Controllers;

use Carbon\Carbon;

use App\Models\Payment;
use App\Models\BankAccount;
use App\Models\User;
use App\Models\Lookup;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class PaymentController extends Controller
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
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        $payment = new Payment;
        $payment->user_id = $user->id;
        $payment->status = 'pending';
        $payment->requested_at = Carbon::now()->format('Y-m-d H:i:s');
        $save = $payment->save();

        if($save){
            return response()->json([
                'status' => 200,
            ], 200);
        }else{
            return response()->json(['message' => 'Failed to request payment'],500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function show(Payment $payment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function edit(Payment $payment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Payment $payment)
    {
        $user = Auth::user();
        if($user->role != 'admin'){
            return response()->json('Forbidden (You dont have permission)', 403);
        }

        $payment = Payment::find($request->id);

        if($payment == null){
            return response()->json(['message' => 'Payment item not found'], 422);
        }

        if($payment->status != 'pending'){
            return response()->json(['message' => 'Payment is not pending'], 422);
        }

        $targetUser = User::find($payment->user_id);
        if($targetUser == null){
            return response()->json(['message' => 'User not found'], 422);
        }

        if($targetUser->bank_account == null){
            return response()->json(['message' => 'User dont have bank account'], 422);
        }

        $bank = BankAccount::find($targetUser->bank_account);

        if($bank == null){
            return response()->json(['message' => 'Bank not found'], 422);
        }

        $lowGradeBasic = Lookup::where('name', 'lowGradeBasic')->first();
        if($lowGradeBasic == null){$lowGradeBasic = 0;}else{$lowGradeBasic = $lowGradeBasic->value;}

        $userSalary = $this->salary($lowGradeBasic, $targetUser->grade, 6);

        $companyBankAccount = BankAccount::where('user_id', $user->id)->first();
        if($companyBankAccount == null){
            return response()->json(['message' => 'Company bank not found'], 422);
        }

        if($userSalary['total'] == 0){
            return response()->json(['message' => 'Please configure grade'], 422);
        }

        if($companyBankAccount->current_balance < $userSalary['total']){
            return response()->json(['message' => 'Company bank account dont have enough money'], 422);
        }
        try {
            DB::beginTransaction();
            $companyBankAccount->current_balance = $companyBankAccount->current_balance - $userSalary['total'];
            $companyBankAccount->save();

            $bank->current_balance = $bank->current_balance + $userSalary['total'];
            $bank->save();

            $payment->status = 'accepted';
            $payment->save();

            DB::commit();
            return response()->json([
                'status' => 200,
                'message' => 'Paid successfully',
            ], 200);

        } catch (\Exception $e) {
            DB::rollback();
            return response()->json([
                'message' => $e->getMessage(),
            ], 500);
        }
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
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Payment $payment)
    {
        //
    }
}
