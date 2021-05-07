<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

use App\Models\User;

class SetupController extends Controller
{

    public function adminSetup(Request $request){
        $admin = User::where('role', 'admin')->first();
            if($admin == null){

            $generated = false;

            while($generated == false){
                $employeeId = substr(str_shuffle('0123456789abcdefghijklmnopqrstuvwxyz'),1,4);
                $existId = User::where('employee_id', $employeeId)->first();
                if($existId == null){$generated = true;}
            }


            $user = new User;
            $user->name = 'Admin';
            $user->email = 'admin@example.com';
            $user->password = Hash::make('123456');
            $user->address = 'nai';
            $user->mobile = '123456789';
            $user->grade = 0;
            $user->employee_id = $employeeId;
            $user->role = 'admin';

            $save = $user->save();
        }

        return response()->json([
            'status' => 200,
            'admin' => true,
            'email' => 'admin@example.com',
            'password' => '123456'
        ], 200); 
    }
}
