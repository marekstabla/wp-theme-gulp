## Overview

Build setup for implementing theme based on Bootstrap and jQuery

## Installation

* Install Node.js
* Install bower
  * ```npm install -g bower```
* Install gulp
  * ```npm install -g gulp```
* Clone repository, and navigate to it
* Install requirements
  * ```npm install```
  * ```bower install```
* Build or run app (This will build scripts, assets, styles and index.html file)
  * Build: ```gulp build```
  * Run: ```gulp serve```
* Build or run app for WordPress (This will build scripts, assets, styles and index.html file)
  * Build: ```gulp wp-build``` - this will build wp theme and put it in ```/dist``` directory
  * Run: ```gulp wp``` - this will build wp theme and insert it into WP specified in ```config.json```, and run watch task