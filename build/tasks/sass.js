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
var sassPath = p.join('node_modules', 'sassdash', 'scss');
var sassOptions = {
    errLogToConsole: true,
    includePaths: neat.includePaths.concat(sassPath)
};

gulp.task('build-sass', function() {
  return gulp.src('./stylesheets/index.scss')
      .pipe(plumber())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(concat('aurelia-interface-grid.css'))
      .pipe(sass(sassOptions))
      .pipe(autoprefixer())
      .pipe(sourcemaps.write())
      .pipe(plumber.stop())
      .pipe(gulp.dest(paths.output))
      .on('error', sass.logError);
});

gulp.task('deploy-sass', function() {
  return gulp.src('./stylesheets/index.scss')
    .pipe(sass(sassOptions))
    .pipe(concat('aurelia-interface-grid.css'))
    .pipe(autoprefixer())
    .pipe(minifycss())
    .pipe(gulp.dest(paths.output))
    .on('error', sass.logError);
});
