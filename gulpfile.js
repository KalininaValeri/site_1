var gulp = require('gulp');
var ejs = require('gulp-ejs');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('ejs', function () {
    gulp.src(['./src/**/*.ejs'])
        .pipe(rename(function(path){
            path.dirname = path.dirname.replace('template', 'dist-html');
            return path;
        }))
        .pipe(ejs({}, {ext: '.html'}))
        .pipe(gulp.dest('src'));
});

gulp.task('sass', function () {
    gulp.src('./scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.start('ejs', 'sass');
    gulp.watch(['template/*.ejs'], ['ejs']);
    gulp.watch('./scss/*.scss', ['sass']);
});