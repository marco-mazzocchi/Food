<?php

use Illuminate\Database\Seeder;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = [
            'pasta secca',
            'pasta fresca',
            'veloce',
            'elaborato',
            'saporito',
            'leggero',
            'uova',
            'verdure',
            'patate',
            'carne rossa',
            'carne bianca',
            'pesce',
            'riso',
            'piccante',
            'speziato',
         ];

        foreach($tags as $tagName) {
            App\Tag::create([
                'name' => $tagName
            ]);
        }
    }
}
