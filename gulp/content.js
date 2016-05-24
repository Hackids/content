'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('content-reload', ['content'], function() {
  return buildContent()
    .pipe(browserSync.stream());
});

gulp.task('content', function() {
  return buildContent();
});

var buildContent = function() {

  return gulp.src(path.join(conf.paths.src, '/content/**/*.json'))
    .pipe($.jsonminify())
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/content/')));
};
