const mix = require('laravel-mix');
var path = require('path');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.js('resources/js/app.js', 'public/js').vue()
 .webpackConfig({
     resolve: {
         alias: {
             '@': path.resolve(__dirname, 'resources/js/'),
             '@pages': path.resolve(__dirname, 'resources/js/pages'),
             '@sass': path.resolve(__dirname, 'resources/sass'),
             '@assets': path.resolve(__dirname, 'resources/assets')
         }
     }

 })
 .sass('resources/sass/main.scss', 'public/css').options({
     postCss:[require('autoprefixer')]
 })
 .postCss('resources/css/app.css', 'public/css', [
     //
 ])
 .browserSync('localhost:8000')
 .disableNotifications();


if (mix.inProduction()) {
 mix.version();
}

mix.webpackConfig({
 output: {
     chunkFilename: 'js/chunks/[name].[contenthash].js',
 }
});    
