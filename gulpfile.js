var
    gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    rigger = require('gulp-rigger'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    jpegoptim = require('imagemin-jpegoptim'),
    mozjpeg = require('imagemin-mozjpeg'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    svgmin = require('gulp-svgmin'),
    cssnano = require('gulp-cssnano'),
    gutil = require('gulp-util'),
    cache = require('gulp-cache');
    
    gulp.task('mytask', function(){
        // код функции
    console.log('Hello world!');
});