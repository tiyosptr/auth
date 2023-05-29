<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Inertia\Inertia;

class VacancyNextController extends Controller
{
    public function index()
    {
        return Inertia::render('VacancyNext');
    }
    
}

