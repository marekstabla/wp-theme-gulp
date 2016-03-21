'use strict';

var gulp = require('gulp'),
    config = require('./config.js');
gulp.task('watch', function () {
    //watch scss & styles
    gulp.watch([config.resolve().srcPath + '/scss/*.scss', '!' + config.resolve().srcPath + '/scss/dependencies.scss'], ['styles-app']);
    gulp.watch(config.resolve().srcPath + '/scss/dependencies.scss', ['styles-dep']);

    //watch scripts
    gulp.watch(config.resolve().srcPath + '/js/*.**', ['scripts']);

    //watch templates
    gulp.watch([config.resolve().srcPath + '/*.html', config.resolve().srcPath + '/templates/*.php'], ['templates']);

    //watch assets
    gulp.watch([config.resolve().srcPath + '/images/*.**'], ['assets']);

    //watch fonts
    gulp.watch([config.resolve().srcPath + '/fonts/*.**'], ['assets']);
});