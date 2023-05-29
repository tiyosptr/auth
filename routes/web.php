<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ManageController;
use App\Http\Controllers\MakeController;
use App\Http\Controllers\SeeController;
use App\Http\Controllers\SeeDescriptionController;
use App\Http\Controllers\LandingpageController;
use App\Http\Controllers\VacancyController;
use App\Http\Controllers\VacancyDescriptionController;
use App\Http\Controllers\VacancyNextController;
use App\Http\Controllers\TalentController;
use App\Http\Controllers\TalentOneController;
use App\Http\Controllers\TalentDescriptionController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\CompanyDescriptionController;
use App\Http\Controllers\ProfileDescriptionController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [LandingpageController::class, 'index'])->name('landingpage');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/home', [AuthController::class, 'index'])->name('home');
Route::get('/manage', [ManageController::class, 'index'])->name('manage');
Route::get('/make', [MakeController::class, 'index'])->name('make');
Route::get('/see', [SeeController::class, 'index'])->name('see');
Route::get('/seeDescription', [SeeDescriptionController::class, 'index'])->name('seeDescription');
Route::get('/vacancy', [VacancyController::class, 'index'])->name('vacancy');
Route::get('/vacancyDescription', [VacancyDescriptionController::class, 'index'])->name('vacancyDescription');
Route::get('/vacancyNext', [VacancyNextController::class, 'index'])->name('vacancyNext');
Route::get('/company', [CompanyController::class, 'index'])->name('company');
Route::get('/companyDescription', [CompanyDescriptionController::class, 'index'])->name('companyDescription');
Route::get('/talent', [TalentController::class, 'index'])->name('talent');
Route::get('/talentOne', [TalentOneController::class, 'index'])->name('talentOne');
Route::get('/talentDescription', [TalentDescriptionController::class, 'index'])->name('talentDescription');
Route::get('/profileDescription', [ProfileDescriptionController::class, 'index'])->name('profileDescription');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
