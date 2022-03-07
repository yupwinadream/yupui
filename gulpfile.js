
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))//sass->css
const minifyCSS = require('gulp-minify-css');//css压缩
gulp.task('sass', async function () {
    return gulp.src('components/**/*.scss')//获取SCSS文件
        .pipe(sass())//转换成CSS
        .pipe(minifyCSS())//压缩CSS
        .pipe(gulp.dest('dist'));//输出目录
});