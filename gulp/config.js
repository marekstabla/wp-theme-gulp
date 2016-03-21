'use strict';

var config = require('../config.json');

exports.resolve = function () {
    var resolvedConfig = config;

    if (process.env.NODE_ENV == 'wp') {
        resolvedConfig.distPath = config.wordPressDirectory + '/wp-content/themes/' + config.themeName;
    }

    return resolvedConfig;
};