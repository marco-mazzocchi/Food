<?php

use Illuminate\Http\Request;
use App\Dish;
use App\Http\Resources\Dish as DishResource;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/dishes', function (Request $request) {
    return DishResource::collection(Dish::all());
});
