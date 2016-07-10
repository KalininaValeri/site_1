var gulp = require('gulp');
var ejs = require('gulp-ejs');
var sass = require('gulp-sass');

gulp.task('ejs', function () {
    gulp.src(['./*/template/page-main.ejs', './*/template/page-log.ejs', './*/template/page-info.ejs', './*/template/page-news.ejs', './*/template/page-services.ejs'])
        .pipe(ejs({}, {ext: '.html'}))
        .pipe(gulp.dest('./s1/html/'));
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