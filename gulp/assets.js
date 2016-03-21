'use strict';

var gulp = require('gulp'),
    config = require('./config.js'),
    plumber = require('gulp-plumber');

var rename = require('gulp-rename'),
    mergeStream = require('merge-stream');

gulp.task('assets', function () {
    var merged = mergeStream();
    //Vendor
    merged.add(gulp.src(config.resolve().bowerDir + '/font-awesome/fonts/**.*')
        .pipe(plumber(function (error) {
            console.log(error.message);
            this.emit('end');
        }))
        .pipe(gulp.dest(config.resolve().distPath + '/fonts')));

    merged.add(gulp.src(config.resolve().srcPath + '/images/**.*')
        .pipe(plumber(function (error) {
            console.log(error.message);
            this.emit('end');
        }))
        .pipe(gulp.dest(config.resolve().distPath + '/images')));

    merged.add(gulp.src(config.resolve().srcPath + '/fonts/**/*')
        .pipe(plumber(function (error) {
            console.log(error.message);
            this.emit('end');
        }))
        .pipe(gulp.dest(config.resolve().distPath + '/fonts')));

    return merged;
});