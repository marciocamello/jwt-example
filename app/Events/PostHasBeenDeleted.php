<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Queue\SerializesModels;

class PostHasBeenDeleted implements ShouldBroadcast
{

    use InteractsWithSockets, SerializesModels;

    public $postId;


    /**
     * Create a new event instance.
     *
     * @param $postId
     */
    public function __construct($postId)
    {
        $this->postId = $postId;
    }


    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        // todo: Change to a private channel when Echo supports JWT-tokens
        return [ 'posts' ];
    }
}
