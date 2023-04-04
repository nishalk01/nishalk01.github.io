import pkg from "gulp";
import gulpSass from 'gulp-sass'
// import sass from 'sass'
// const sass = require('gulp-sass')(require('sass'));

import prefix from 'gulp-autoprefixer';
import minify from 'gulp-clean-css';
import terser from 'gulp-terser';
import imagemin, { mozjpeg, optipng } from 'gulp-imagemin';
import imagewebp from 'gulp-webp';
import fs from 'fs';
import path from 'path';
import concat from 'gulp-concat';
import purgecss from 'gulp-purgecss';


// let Sass = gulpSass(sass);
let { src, dest, watch, series, task,merge } = pkg;

function getFolders(dir) {
    return fs.readdirSync(dir).filter((file) => {
        return fs.statSync(path.join(dir, file)).isDirectory();
    })
}


// scss

// function compilescss() {
//     let Filepath = "styles/"
//     let folders = getFolders(Filepath)
//     let task1 = folders.map((folder) => {
//         return src(path.join(Filepath, folder, "/**/*.scss"))
//             .pipe(Sass())
//             .pipe(prefix())
//             .pipe(minify())
//             // .pipe(dest())
//             .pipe(dest("dist/css"))
//     })

//     let task2 = src(path.join(Filepath, '/*.scss'))
//         .pipe(Sass())
//         .pipe(prefix())
//         .pipe(minify())
//         // .pipe(dest())
//         .pipe(dest("dist/css"))

//         return merge

// }


function compilecss(){
    let filePath1 = "styles";
    let filePath2 = "css";
    return src(`${filePath1}/*.css`)
            .pipe(purgecss({content:['*.html']}))
            .pipe(prefix())
            .pipe(minify())
            .pipe(dest('dist/css'))

}

// task('compilescss', compilescss);

// js

function jsmin() {
    return src("js/*.js")
        .pipe(terser())
        .pipe(dest('dist/js'))
}

// images
function optimizeimg() {
    return src('assets/skills/*.{jpg,png}')
        .pipe(imagemin([
            mozjpeg({ quality: 80, progressive: true }),
            optipng({ optimizationLevel: 2 }),
        ]))
        .pipe(dest("dist/images"))

}
// Webp images

function webpImage() {
    return src('dist/images/*.{jpg,png}')
        .pipe(imagewebp())
        .pipe(dest('dist/images'))
}



// create WatchTask
function watchTask() {
    // watch('styles/*.scss', compilescss);
    watch("styles.*.css",compilecss);
    watch('js/*.js', jsmin);
    watch('dist/images/*.{jpg,png}', optimizeimg);
    watch('dist/images/*.{jpg,png}', webpImage);

}


task('watch', watchTask)

// default gulp
// const somename = series = {
//     compilescss,
//     jsmin,
//     optimizeimg,
//     webpImage,
//     watchTask
// };

task('build', series(compilecss,jsmin, optimizeimg, webpImage, watchTask));

task('buildcss',compilecss);