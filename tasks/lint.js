var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var jsxhint = require('jshint-jsx').JSXHINT;

gulp.task('lint:scss', function() {
  return gulp.src('./app/**/*.scss')
    .pipe(scsslint({
      'config': 'scss-lint.yml'
    }));
});

gulp.task('lint:jsx', function() {
  return gulp.src([
      './app/**/*.jsx'
    ])
    .pipe(jshint({
      linter: jsxhint,
      esversion: 6
    }))
    .pipe(jshint.reporter(stylish));
});

gulp.task('lint:js', function() {
  return gulp.src([
      './app/**/*.js',
      '!./app/**/*.spec.js'
    ])
    .pipe(jshint({
      esversion: 6,
      "-W138": false // add the exclusion for regular/default params
    }))
    .pipe(jshint.reporter(stylish));
});