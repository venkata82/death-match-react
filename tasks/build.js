var gulp = require('gulp');

gulp.task('build', [
	'scss-lint', 
	'js-lint', 
	'test'
  // TODO: add webpack bundle here
]);
