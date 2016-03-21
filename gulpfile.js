'use strict';

var gulp = require('gulp'),
    wrench = require('wrench');

//read all gulp tasks from gulp directory
wrench.readdirSyncRecursive('./gulp').filter(function (file) {
    return (/\.(js)$/i).test(file);
}).map(function (file) {
    require('./gulp/' + file);
});

gulp.task('default', ['serve'], function () {

});

