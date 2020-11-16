<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SpacePhoto extends Model
{
    protected $guarded = [];

    public function spaces()
    {
        return $this->belongsTo(Space::class, 'space_id', 'id');
    }
}
