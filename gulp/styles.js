'use strict';

var gulp = require('gulp'),
    config = require('./config.js'),
    plumber = require('gulp-plumber');

var wiredep = require('wiredep')(),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    mergeStream = require('merge-stream'),
    cssnano = require('gulp-cssnano');

gulp.task('styles-app', function () {
    return gulp.src(config.resolve().srcPath + '/scss/app.scss')
        .pipe(plumber(function (error) {
            console.log(error.message);
            this.emit('end');
        }))
        .pipe(rename({basename: 'style'}))
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest(config.resolve().distPath))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(gulp.dest(config.resolve().distPath))
});

gulp.task('styles-dep', function () {
    var merged = mergeStream();

    merged.add(gulp.src(config.resolve().srcPath + '/scss/dependencies.scss')
        .pipe(plumber(function (error) {
            console.log(error.message);
            this.emit('end');
        }))
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest(config.resolve().distPath + '/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(gulp.dest(config.resolve().distPath + '/css')));

    return merged;
});

gulp.task('styles', ['styles-app', 'styles-dep'], function() {
    console.log("Styles builded");
});