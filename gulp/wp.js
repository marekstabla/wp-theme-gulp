'use strict';

var gulp = require('gulp');

gulp.task('wp', function() {
   process.env.NODE_ENV = 'wp';
    gulp.start('serve');
});

gulp.task('wp-build', function() {
    process.env.NODE_ENV = 'wp-build';
    gulp.start('build');
});