<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Inertia\Inertia;

class SeeDescriptionController extends Controller
{
    public function index()
    {
        return Inertia::render('SeeDescription');
    }
    
}

