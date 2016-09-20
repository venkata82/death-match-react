var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var jshint = require('gulp-jshint');
 
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
      esversion: 6
      // TODO: add the exclusion for regular/default params
    }))
    .pipe(jshint.reporter('default'));
});

// TODO: jsx linter task goes here