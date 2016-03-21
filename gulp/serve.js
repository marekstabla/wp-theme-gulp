'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    config = require('./config.js');

gulp.task('serve', ['build'], function () {
    gulp.start('watch');
    if (process.env.NODE_ENV != 'wp') {
        browserSync.init({
            server: config.resolve().distPath
        });
        gulp.watch(config.resolve().distPath + '/**/*').on('change', browserSync.reload);
    }
});