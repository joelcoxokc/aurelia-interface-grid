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

gulp.task('build-build-sass', function() {
  return ai.build({
    input: './stylesheets/index.scss',
    output: './stylesheets',
    prefix: true,
    dev: true,
    minify:false,
    concat: 'ai-grid.css'
  });
});

gulp.task('build-deploy-sass', function() {
  return ai.build({
    input: './stylesheets/index.scss',
    output: './stylesheets',
    prefix: true,
    dev: false,
    minify:true,
    concat: 'ai-grid.css'
  });
});

gulp.task('deploy-sass', ['build-deploy-sass'], function() {
  return gulp.src('stylesheets/ai-grid.css')
    .pipe(gulp.dest(paths.output + 'amd'))
    .pipe(gulp.dest(paths.output + 'commonjs'))
    .pipe(gulp.dest(paths.output + 'es6'))
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-sass', ['build-build-sass'], function() {
  return gulp.src('stylesheets/ai-grid.css')
    .pipe(gulp.dest(paths.output + 'amd'))
    .pipe(gulp.dest(paths.output + 'commonjs'))
    .pipe(gulp.dest(paths.output + 'es6'))
    .pipe(gulp.dest(paths.output + 'system'));
});
