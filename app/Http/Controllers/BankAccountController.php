<?php

namespace App\Http\Controllers;

use App\Models\BankAccount;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class BankAccountController extends Controller
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
        $bank = BankAccount::where('user_id', $user->id)->first();
        if($bank == null){
            return response()->json([
                'status' => 200,
                'bank' => false,
            ], 200);
        }else{
            return response()->json([
                'status' => 200,
                'bank' => true,
                'bankName' => $bank->bank,
                'branchName' => $bank->branch_name,
                'accountType' => $bank->account_type,
                'accountName' => $bank->account_name,
                'accountNumber' => $bank->account_number,
                'currentBalance' => $bank->current_balance,
            ], 200);
        }
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
        $input = $request->all();
        $validator = Validator::make($input, [
            'bankName' => 'required',
            'branchName' => 'required',
            'accountType' => 'required',
            'accountName' => 'required',
            'accountNumber' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()],422);
        }

        $user = Auth::user();
        try {
            DB::beginTransaction();
            $bank = New BankAccount;
            $bank->bank = $request->bankName;
            $bank->branch_name = $request->branchName;
            $bank->current_balance = 0;
            $bank->account_number = $request->accountNumber;
            $bank->account_name = $request->accountName;
            $bank->account_type = $request->accountType;
            $bank->user_id = $user->id;

            $saveBank = $bank->save();

            $user->bank_account = $bank->id;
            $updateUser = $user->update();

            DB::commit();

            return response()->json([
                'status' => 200,
                'message' => 'Bank info updated successfully',
            ], 200);

        } catch (\Exception $e) {
            DB::rollback();
            return response()->json([
                'message' => $e->getMessage(),
            ], 500);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BankAccount  $bankAccount
     * @return \Illuminate\Http\Response
     */
    public function show(BankAccount $bankAccount)
    {


    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BankAccount  $bankAccount
     * @return \Illuminate\Http\Response
     */
    public function edit(BankAccount $bankAccount)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\BankAccount  $bankAccount
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BankAccount $bankAccount)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'bankName' => 'required',
            'branchName' => 'required',
            'accountType' => 'required',
            'accountName' => 'required',
            'accountNumber' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()],422);
        }

        $user = Auth::user();

        $bank = BankAccount::find($user->bank_account);

        $bank->bank = $request->bankName;
        $bank->branch_name = $request->branchName;
        $bank->account_number = $request->accountNumber;
        $bank->account_name = $request->accountName;
        $bank->account_type = $request->accountType;
        
        $save = $bank->save();
        if($save){
            return response()->json([
                'status' => 200,
                'message' => "Bank info updated successfully.",
            ], 200);
        }else{
            return response()->json(['message' => 'Failed to updated bank info'],500);
        }
    }

    /**
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function requestBalance(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'requestBalance' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()],422);
        }

        $user = Auth::user();
        
        if($user->role != 'admin'){
            return response()->json('Forbidden (You dont have permission)', 403);
        }

        $bank = BankAccount::where('user_id', $user->id)->first();

        $bank->current_balance = $bank->current_balance + $request->requestBalance;

        $save = $bank->save();
        if($save){
            return response()->json([
                'status' => 200,
                'message' => "Balance updated successfully.",
            ], 200);
        }else{
            return response()->json(['message' => 'Failed to updated balance'],500);
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BankAccount  $bankAccount
     * @return \Illuminate\Http\Response
     */
    public function destroy(BankAccount $bankAccount)
    {
        //
    }
}
