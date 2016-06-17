
var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    browserSync     = require('browser-sync').create();

    // Maybe future use
    //    gutil    = require('gulp-util'),
    //    jshint = require('gulp-jshint'),
    //    minify = require('gulp-minify'),
    //    concat  = require('gulp-concat'),
    //    clean = require('gulp-clean');


    gulp.task('browserSync', function () {
        browserSync.init({
            server: {
                baseDir: 'app'
            },
        })
    })

    gulp.task('sass', function(){
        return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
    })


    gulp.task('watch', ['browserSync', 'sass'], function() {
        gulp.watch('app/scss/**/*.scss', ['sass']);
        gulp.watch('app/*.html', browserSync.reload);
        gulp.watch('app/js/**/*.js', browserSync.reload);
    });


  