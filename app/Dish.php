<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dish extends Model
{
    protected $fillable = [
        'name'
    ];

    public function tags()
    {
        return $this->belongsToMany('App\Tag');
    }
}
