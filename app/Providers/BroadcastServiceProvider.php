<?php

namespace App\Providers;

use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\ServiceProvider;

class BroadcastServiceProvider extends ServiceProvider
{

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Broadcast::routes([
            'middleware' => [
                'api',
                'jwt.auth',
            ]
        ]);

        /*
         * Authenticate the user's personal channel...
         */
        Broadcast::channel('App.User.*', function ($user, $userId) {
            return (int) $user->id === (int) $userId;
        });

        Broadcast::channel('posts', function ($user) {
            return isset( $user );
        });

        Broadcast::channel('posts-presence', function ($user) {
            return ['id' => $user->id, 'name' => $user->name];
        });
    }
}
