<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

use App\Models\User;

class UserController extends Controller
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
        $input = $request->all();
        $validator = Validator::make($input, [
            'name' => 'required|max:100',
            'email' => 'required|unique:App\Models\User|email',
            'password' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'grade' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()],422);
        }

        $generated = false;

        while($generated == false){
            $employeeId = substr(str_shuffle('0123456789abcdefghijklmnopqrstuvwxyz'),1,4);
            $existId = User::where('employee_id', $employeeId)->first();
            if($existId == null){$generated = true;}
        }


        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->address = $request->address;
        $user->mobile = $request->phone;
        $user->grade = $request->grade;
        $user->employee_id = $employeeId;
        $user->role = 'employee';

        $save = $user->save();
        if($save){
            return response()->json([
                'status' => 200,
            ], 200);
        }else{
            return response()->json(['message' => 'Failed to create user'],500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


}
