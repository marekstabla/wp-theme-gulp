'use strict';

var gulp = require('gulp'),
    config = require('./config.js'),
    plumber = require('gulp-plumber');

var wiredep = require('wiredep')(),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    mergeStream = require('merge-stream');

// Scripts
gulp.task('scripts', function () {
    var merged = mergeStream();

    merged.add(gulp.src(wiredep.js)
        .pipe(plumber(function (error) {
            console.log(error.message);
            this.emit('end');
        }))
        .pipe(concat('dependencies.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(config.resolve().distPath + '/js')));

    merged.add(gulp.src([config.resolve().srcPath + '/js/**.*'])
        .pipe(plumber(function (error) {
            console.log(error.message);
            this.emit('end');
        }))
        .pipe(concat('app.js'))
        .pipe(gulp.dest(config.resolve().distPath + '/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest(config.resolve().distPath + '/js')));

    return merged;
});