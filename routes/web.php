<?php

// Register Laravel Nova routes
Auth::routes();

// Register catch-all route for single page frontend
// avoiding closures to allow for page caching
Route::get('{any?}', 'ViewController@app')->where('any', '.*');
