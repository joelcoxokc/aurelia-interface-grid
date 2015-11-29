// npm install --save-dev gulp-sass node-neat gulp-plumber gulp-sourcemaps gulp-autoprefixer gulp-concat gulp-minify-css sassdash

var gulp = require('gulp');
var sass = require('gulp-sass');
var neat = require('node-neat');
var plumber = require('gulp-plumber');
var paths   = require('../paths');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var p = require('path');
var ai = require('node-ai').ai

gulp.task('build-sass', function() {
  return ai.build({
    input: './stylesheets/index.scss',
    output: paths.output,
    prefix: true,
    dev: true,
    minify:false,
    concat: 'ai-grid.css'
  });
});

gulp.task('deploy-sass', function() {
  return ai.build({
    input: './stylesheets/index.scss',
    output: paths.output,
    prefix: true,
    dev: false,
    minify:true,
    concat: 'ai-grid.css'
  });
});
