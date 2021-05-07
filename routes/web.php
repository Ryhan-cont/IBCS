<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\GradeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SetupController;
use App\Http\Controllers\LayoutController;
use App\Http\Controllers\BankAccountController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PaymentController;

Route::prefix('api/auth')->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
});

Route::prefix('api/dashboard')->group(function () {
    Route::get('detail', [DashboardController::class, 'index']);
});

Route::prefix('api/user')->group(function () {
    Route::get('list', [UserController::class, 'index']);
    Route::post('create', [UserController::class, 'store']);
    Route::put('update', [UserController::class, 'update']);

    Route::get('create-admin', [SetupController::class, 'adminSetup']);
});

Route::prefix('api/layout')->group(function () {
    Route::get('resource', [LayoutController::class, 'index']);
});

Route::prefix('api/grade')->group(function () {
    Route::get('list', [GradeController::class, 'index']);
    Route::put('update', [GradeController::class, 'store']);
});

Route::prefix('api/bank')->group(function () {
    Route::get('detail', [BankAccountController::class, 'index']);
    Route::post('create', [BankAccountController::class, 'store']);
    Route::put('update', [BankAccountController::class, 'update']);

    Route::post('request-balance-from-bank', [BankAccountController::class, 'requestBalance']);
});

Route::prefix('api/payment')->group(function () {
    Route::post('request', [PaymentController::class, 'store']);
    Route::put('update/{id}', [PaymentController::class, 'update']);
});

Route::get('/api/{any}', function(){ return response()->json('API not found', 404);})->where('any', '.*');
Route::post('/api/{any}', function(){ return response()->json('API not found', 404);})->where('any', '.*');
Route::put('/api/{any}', function(){ return response()->json('API not found', 404);})->where('any', '.*');
Route::delete('/api/{any}', function(){ return response()->json('API not found', 404);})->where('any', '.*');

Route::get('/{any}', [ApplicationController::class, '__invoke'])->where('any', '.*');