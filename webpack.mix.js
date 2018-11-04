let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
mix.webpackConfig({
   plugins: [
       new SWPrecacheWebpackPlugin({
           cacheId: 'pwa',
           filename: 'service-worker.js',
           staticFileGlobs: [
               'public/**/*.{css,eot,png,svg,ttf,woff,woff2,js,html}'
           ],
           minify: true,
           stripPrefix: 'public/',
           handleFetch: true,
           dynamicUrlToDependencies: { //you should add the path to your blade files here so they can be cached
               //and have full support for offline first (example below)
               '/': ['resources/views/welcome.blade.php'],
               '/api/dishes': ['app/Http/Resources/Dish.php']
               // '/posts': ['resources/views/posts.blade.php']
           },
           staticFileGlobsIgnorePatterns: [/\.map$/, /mix-manifest\.json$/, /manifest\.json$/, /service-worker\.js$/],
           navigateFallback: '/',
           runtimeCaching: [
               {
                   urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
                   handler: 'cacheFirst'
               },
               {
                   urlPattern: /^https:\/\/use\.fontawesome\.com\//,
                   handler: 'cacheFirst'
               }
           ],
           // importScripts: ['./js/push_message.js']
       })
   ]
});
