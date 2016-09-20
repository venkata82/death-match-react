var gulp = require('gulp');

gulp.task('build', [
	'lint:scss', 
	'lint:js', 
	'test'
  // TODO: add webpack bundle here
]);
