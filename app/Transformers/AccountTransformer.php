<?php

namespace App\Transformers;

class AccountTransformer extends Transformer
{

    public function transform($user)
    {
        return [
            'id'    => (int) $user->id,
            'email' => $user->email,
            'name'  => $user->name
        ];
    }
}