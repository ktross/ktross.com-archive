<?php

use Faker\Generator as Faker;
use Carbon\Carbon;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Project::class, function (Faker $faker) {
    $title = $faker->sentence();
    $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title)));
    return [
        'user_id' => 1,
        'title' => $title,
        'slug' => $slug,
        'content' => $faker->paragraphs(3, true),
        'source_url' => 'https://github.com/ktross/ktross.com',
        'demo_url' => 'https://www.ktross.com',
        'published' => true,
        'published_at' => Carbon::now()
    ];
});
