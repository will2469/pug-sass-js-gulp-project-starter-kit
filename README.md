## PUG SASS JAVASCRIPT GULP PROJECT STARTER KIT
>starter project untuk mengawali membangun aplikasi html static

Starter project ini dibangun dengan versi terbaru saat ini sehingga tidak ada kegagalan dalam instalasi ataupun update.

## Table of Contents

- [Latar Belakang](#latar-belakang)
- [Build status](#build-status)
- [Dependencies](#dependencies)
- [Features](#features)
- [Install](#install)
- [Panduan](#panduan)
- [Donasi](#panduan)
- [Lisensi](#lisensi)

## Latar Belakang

Project ini sebenarnya adalah branch dari project yang sedang saya jalankan. Saya mengalami kesulitan dalam mencoba starter kit yang ada mungkin karena project sudah lama jadi banyak fitur **deprecated** yang membingungkan saya. Namun setelah saya pelajari documentasi dari masing - masing dependencies yang saya butuhkan terbuatlah sebuah starker kit ini.

## Build status

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f974ac9efbbe43beb1ee2a7080b851b5)](https://www.codacy.com/manual/will2469/pug-sass-js-gulp-project-starter-kit?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=will2469/pug-sass-js-gulp-project-starter-kit&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.com/will2469/pug-sass-js-gulp-project-starter-kit.svg?branch=master)](https://travis-ci.com/will2469/pug-sass-js-gulp-project-starter-kit)

## Dependencies

Untuk menghindari kegagalan dalam menggunakan starter kit ini harap untuk dibaca terlebih dahulu versi dependencies yang saya gunakan

- **[NodeJs Versi 13.8.0](https://nodejs.org/dist/v13.8.0/node-v13.8.0-x64.msi)**
- **[NPM versi 6.13.7](https://www.npmjs.com/)**
- **[Gulp CLI versi 2.2.0](https://www.npmjs.com/package/gulp-cli)**
- **[gulp@4.0.2](https://www.npmjs.com/package/gulp)**
- **[gulp-concat@2.6.1](https://www.npmjs.com/package/gulp-concat)**
- **[gulp-postcss@8.0.0](https://www.npmjs.com/package/gulp-postcss)**
- **[gulp-pug@4.0.1](https://www.npmjs.com/package/gulp-pug/v/4.0.1)**
- **[gulp-replace@1.0.0](https://www.npmjs.com/package/gulp.replace/v/1.0.0)**
- **[gulp-sass@4.0.2](https://www.npmjs.com/package/gulp-sass)**
- **[gulp-sourcemaps@2.6.5](https://www.npmjs.com/package/gulp-sourcemaps?activeTab=versions)**
- **[gulp-uglify@3.0.2](https://www.npmjs.com/package/gulp-uglify)**
- **[autoprefixer@9.7.4](https://www.npmjs.com/package/autoprefixer)**
- **[browser-sync@2.26.7](https://www.npmjs.com/package/browser-sync)**
- **[cssnano@4.1.10](https://www.npmjs.com/package/cssnano)**

## Features

starter kit ini dilengkapi dengan berbagai macam fitur :

1. menjalankan command dengan npm run <script>, command yang tersedia :
	
    ```
	$ npm run sass
	$ npm run pug
	$ npm run js
	$ npm run cache:bust
	$ npm run prod
	$ npm run watch
	$ npm run serve
    ```

2. Fitur live server dengan browser-sync

    ```
    $ gulp watch
	//atau dengan
	$ npm run watch
    ```

3. Menggunakan cache bust dengan gulp-replace

## Install

Untuk memulai aplikasi ini silahkan ikuti langkah - langkah berikut :

1. Clone atau download pada github repository dan extract ke folder yang diinginkan

2. Buka dengan code editor, kami menyarankan untuk menggunakan Visual Studio Code

3. Open terminal menggunakan shortcut `Ctrl` + `Shift` + `

4. Jalankan kode berikut untuk menginstall semua dependencies

    ```
    $ npm install
    ```

5. Setelah berhasil tekan `Ctrl` + `Click` pada local server

    ```
    $ npm run watch
    ```

10. Happy Coding!!! :thumbsup: :thumbsup: :thumbsup:

## Panduan

**Sebelum menggunakan aplikasi ini pastikan telah menginstall Gulp secara global**. Jika belum maka silahkan buka comandprompt sebagai admin dengan menjalankan :
    ```
    $ npm i gulp-cli -g
    ```

## Donasi

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](VUD3ME6DUHU3U)

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="VUD3ME6DUHU3U">
<table>
<tr><td><input type="hidden" name="on0" value="Buy Me a Coffee">Buy Me a Coffee</td></tr><tr><td><select name="os0">
	<option value="small">small $2,50 USD</option>
	<option value="medium">medium $5,00 USD</option>
	<option value="big">big $10,00 USD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="USD">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/id_ID/i/scr/pixel.gif" width="1" height="1">
</form>


## Lisensi

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Aplikasi ini memiliki lisensi : [MIT](https://opensource.org/licenses/MIT)

© [will2469](https://github.com/will2469) 2020
