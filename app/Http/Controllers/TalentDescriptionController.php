<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Inertia\Inertia;

class TalentDescriptionController extends Controller
{
    public function index()
    {
        return Inertia::render('TalentDescription');
    }
    
}

