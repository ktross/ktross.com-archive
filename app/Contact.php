<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'name',
        'company_name',
        'email',
        'phone',
        'message'
    ];
}
