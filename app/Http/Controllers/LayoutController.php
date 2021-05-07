<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LayoutController extends Controller
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

        if($user->role == 'admin'){
            $menu = [
                array(
                    'title' => 'Dashboard',
                    'name' => 'Dashboard',
                    'url' => '/dashboard',
                    'icon' => 'tablet'
                ),
                array(
                    'title' => 'Create User',
                    'name' => 'CreateUser',
                    'url' => '/create-user',
                    'icon' => 'users'
                ),
                array(
                    'title' => 'Manage Grade',
                    'name' => 'ManageGrade',
                    'url' => '/manage-grade',
                    'icon' => 'random'
                ),
                array(
                    'title' => 'Manage Bank',
                    'name' => 'ManageBank',
                    'url' => '/manage-bank',
                    'icon' => 'university'
                ),
            ];

        }
        if($user->role == 'employee'){
            $menu = [
                array(
                    'title' => 'Dashboard',
                    'name' => 'Dashboard',
                    'url' => '/dashboard',
                    'icon' => 'tablet'
                ),
                array(
                    'title' => 'Manage Bank',
                    'name' => 'ManageBank',
                    'url' => '/manage-bank',
                    'icon' => 'university'
                ),
            ];
        }

        return response()->json([
            'status' => 200,
            'menu' => $menu,
            'name' => $user->name,
            'role' => $user->role,
        ], 200);
    }
}
