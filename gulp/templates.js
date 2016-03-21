'use strict';

var gulp = require('gulp'),
    config = require('./config.js'),
    plumber = require('gulp-plumber');

//Templates
gulp.task('templates', function () {
    if (process.env.NODE_ENV == 'wp' || process.env.NODE_ENV == 'wp-build') {

        return gulp.src(config.resolve().srcPath + '/templates/*.php')
            .pipe(plumber(function (error) {
                console.log(error.message);
                this.emit('end');
            }))
            .pipe(gulp.dest(config.resolve().distPath));

    } else {
        return gulp.src(config.resolve().srcPath + '/*.html')
            .pipe(plumber(function (error) {
                console.log(error.message);
                this.emit('end');
            }))
            .pipe(gulp.dest(config.resolve().distPath));

    }
});