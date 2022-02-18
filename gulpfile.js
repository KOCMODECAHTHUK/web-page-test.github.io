'use strict';
var gulp = require('gulp'),// Подключаем Gulp
    watch = require('gulp-watch'),// Будет нужен для наблюдения за изменениями файлов
    prefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления префиксов
    uglify = require('gulp-uglify'),// Подключаем gulp-uglifyjs (для сжатия JS)
    sourcemaps = require('gulp-sourcemaps'),// Будет помогать нам при отладке кода
    rigger = require('gulp-rigger'),// Плагин позволяет импортировать один файл в другой простой конструкцией //= template/footer.html
    cssmin = require('gulp-minify-css'),// Подключаем для сжатия CSS кода
    imagemin = require('gulp-imagemin'),// Подключаем библиотеку для работы с изображениями
    pngquant = require('imagemin-pngquant'),// Подключаем библиотеку для работы с png
    rimraf = require('rimraf'),// rm -rf для ноды
    browserSync = require("browser-sync"),// Подключаем Browser Sync
    reload = browserSync.reload;
const sass = require('gulp-sass')(require('sass'));//Подключаем Sass пакет

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

// Переменная с настройками dev сервера
var config = {
    server: {
        baseDir: "./build"
    },
    notify: false,
    // tunnel: true, // Открывает тунель для сайта
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

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
        .pipe(uglify()) //Сожмем
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

// Таск для сборки img
gulp.task('image', async function () {
    gulp.src(path.src.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)); //И бросим в build
});

// Таск для сборки fonts
gulp.task('fonts', async function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

// удаляет папку build
gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

// каждый раз при изменении какого то файла запускать нужную задачу
gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js');
    });
});

// для livereload создает лок. сервер
gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('default', gulp.series('webserver', 'watch'));