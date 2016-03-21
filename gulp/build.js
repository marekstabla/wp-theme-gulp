'use strict';

var gulp = require('gulp');

gulp.task('build', ['scripts', 'styles', 'assets', 'templates'], function () {
    console.log("Build succeed");
});
