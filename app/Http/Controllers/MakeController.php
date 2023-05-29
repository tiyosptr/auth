<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Inertia\Inertia;

class MakeController extends Controller
{
    public function index()
    {
        return Inertia::render('Make');
    }
    
}

