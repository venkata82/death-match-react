var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var jshint = require('gulp-jshint');
 
gulp.task('scss-lint', function() {
  return gulp.src('./app/**/*.scss')
    .pipe(scsslint());
});

gulp.task('js-lint', function() {
  return gulp.src([
      './app/**/*.js',
      '!./app/**/*.spec.js'
    ])
    .pipe(jshint({
      esversion: 6
      // TODO: add the exclusion for regular/default params
    }))
    .pipe(jshint.reporter('default'));
});

// TODO: jsx linter task goes here