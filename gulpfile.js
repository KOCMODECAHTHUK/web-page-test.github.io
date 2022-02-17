'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;
    
const sass = require('gulp-sass')(require('sass'));

    var path = {
        build: { //Тут мы укажем куда складывать готовые после сборки файлы
            html: 'build/',
            js: 'build/js/',
            css: 'build/css/',
            img: 'build/img/',
            fonts: 'build/fonts/'
        },
        src: { //Пути откуда брать исходники
            html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
            js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
            style: 'src/style/main.scss',
            img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
            fonts: 'src/fonts/**/*.*'
        },
        watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
            html: 'src/**/*.html',
            js: 'src/js/**/*.js',
            style: 'src/style/**/*.scss',
            img: 'src/img/**/*.*',
            fonts: 'src/fonts/**/*.*'
        },
        clean: './build'
    };

    gulp.task('webserver', function(){
        browserSync:({
            server: {
            baseDir: "./build"
        },
        tunnel: true,
        host: 'localhost',
        port: 9000,
        logPrefix: "Frontend_Devil"
        });
    });

    gulp.task('html', async function () {
        gulp.src(path.src.html) //Выберем файлы по нужному пути
            .pipe(rigger()) //Прогоним через rigger
            .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
            .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
    });

    // Сборщик для JS
    gulp.task('js', async function () {
        gulp.src(path.src.js) //Найдем наш main файл
            .pipe(rigger()) //Прогоним через rigger
            .pipe(sourcemaps.init()) //Инициализируем sourcemap
            .pipe(uglify()) //Сожмем наш js (Позже убрать)
            .pipe(sourcemaps.write()) //Пропишем карты
            .pipe(gulp.dest(path.build.html)) //Запишем результирующий файл в папку build
            .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
    });

    // Сборщик для CSS
    gulp.task('style', async function () {
        gulp.src(path.src.style) //Выберем наш main.scss
            .pipe(sourcemaps.init()) //То же самое что и с js
            .pipe(sass()) //Скомпилируем
            .pipe(prefixer(['last 5 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) //Добавим вендорные префиксы
            .pipe(cssmin()) //Минификация
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(path.build.css))
            .pipe(reload({stream: true}));
    });