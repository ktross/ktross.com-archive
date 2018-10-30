<?php

// API is read-only, therefore we only use index and show methods
Route::resource('users', 'UserController')->only(['index', 'show']);
Route::resource('posts', 'PostController')->only(['index', 'show']);
Route::resource('projects', 'ProjectController')->only(['index', 'show']);

// todo: why can't I use only() on Route::resources (plural)?
