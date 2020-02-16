/**
 * 
 * Ini adalah file konfigurasi untuk gulp ('https://gulpjs.com/')
 * sebuah plugin untuk membuat proses development menjadi lebih mudah
 * pertama yang harus kita lakukan adalah dengan mendeklarasikan modul
 * yang akan kita dipakai
 * 
 */

const {
    src,
    dest,
    watch,
    series,
    parallel,
    task
} = require('gulp')
const autoprefixer = require('autoprefixer')
const browsersync = require('browser-sync').create()
const concat = require('gulp-concat')
const cssnano = require('cssnano')
const postcss = require('gulp-postcss')
const pug = require('gulp-pug')
const replace = require('gulp-replace')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')

/**
 * 
 * Kemudian kita melakukan deklarasi untuk path direktori yang kita tentukan
 * ini memudahkan kita untuk menghindari menuliskan direktori secara berulang
 * 
 */

const files = {
    jsPath: './src/js/**/*.js',
    pugPath: './src/**/*.pug',
    scssPath: './src/scss/**/*.scss',
    htmlPath: './dist/**/*.html',
}

/**
 *
 * Command gulp untuk sass (gulp sass => npm run sass) untuk sass
 * Mengkombinasi semua file scss ke css pada src/sass ke folder dist/css
 * 
 */

task('sass', () => {
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass({
                outputStyle: 'compressed'
            })
            .on('error', sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('./'))
        .pipe(dest('dist/css/'))
})

/**
 * 
 * Command gulp untuk file pug (gulp pug => npm run pug)
 * untuk konversi semua file pug dari folder src ke html pada folder dist
 * 
 */


task('pug', () => {
    return src(files.pugPath)
        .pipe(pug({
            pretty: true
        }))
        .pipe(dest('./dist/'))
})

/**
 * 
 * Command gulp untuk file js (gulp js => npm run js)
 * untuk menyalin semua file js dari folder src ke folder dist
 * 
 */


task('js', () => {
    return src(files.jsPath)
        .pipe(concat('main.bundle.js'))
        .pipe(uglify())
        .pipe(dest('./dist/js/'))
})

/**
 * 
 * Command gulp untuk memberikan chache bedasarkan waktu file html
 * (gulp chace: bust => npm run chace:bust)
 * mengganti ?cb=--time-sting---
 * 
 */

//membuat string cb bedasarkan waktu

const cbString = new Date().getTime()
// Deklarasi Task (gulp chace:bust)
task('cache:bust', () => {
    return src([files.htmlPath])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('./dist/'))
})

/**
 * 
 * Command default gulp (gulp => npm run prod)
 * saya menggunakan metode parallel untuk command ini
 * jadi saya menggunakan ini sebagai fungsi build
 * 
 */

task('default', parallel('sass', 'pug', 'js', 'cache:bust'));

/**
 * 
 * Command untuk melihat hasil tampilan dengan dengan live server
 * dengan menjalankan (gulp serve => npm run serve) tidak dapat
 * melihat perubahan file secara langsung
 * 
 */

task('serve', () => {
    browsersync.init({
        server: {
            baseDir: './dist'
        }
    });
})

/**
 * 
 * Command untuk menggunakan fitur live server (gulp watch)
 * Kita dapat melihat secara langsung perubahan yang dilakukan pada browser
 * dengan menggunakan browsersync 
 * 
 */

task('watch', () => {
    watch([files.pugPath, files.jsPath, files.scssPath],
        series('pug', 'js', 'sass')).on('change', browsersync.reload);
    browsersync.init({
        server: {
            baseDir: './dist'
        }
    });
})