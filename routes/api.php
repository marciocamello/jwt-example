<?php

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

Route::group([
    'middleware' => [
        'jwt.auth'
    ]
], function () {

    Route::group([
        'as'     => 'account.',
        'prefix' => 'account'
    ], function () {
        Route::get('', [
            'as'   => 'show',
            'uses' => 'AccountController@show'
        ]);
    });

    Route::group([
        'as'     => 'post.',
        'prefix' => 'posts'
    ], function () {
        Route::get('', [
            'as'   => 'index',
            'uses' => 'PostController@index'
        ]);

        Route::post('', [
            'as'   => 'store',
            'uses' => 'PostController@store',
        ]);

        Route::delete('{post}', [
            'as'   => 'destroy',
            'uses' => 'PostController@destroy'
        ]);
    });

});

Route::post('auth', [
    'as'   => 'auth.store',
    'uses' => 'AuthController@authenticate'
]);
