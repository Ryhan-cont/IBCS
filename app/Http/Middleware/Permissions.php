<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Permissions
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {

        $reqPath = explode('/',$request->path());
        $user = Auth::user();


        if($user->role == 'admin'){
            $restriction = [];
        }
        if($user->role == 'employee'){
            $restriction = ['grade'];
        }

        if(in_array($reqPath[1], $restriction)){
            return response()->json('Forbidden (You dont have permission)', 403);
        }else{
            return $next($request);            
        }
    }
}
