var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
 
gulp.task('lint:scss', function() {
  return gulp.src('./app/**/*.scss')
    .pipe(scsslint({
      'config': 'scss-lint.yml'
    }));
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

// TODO: jsx linter task goes here