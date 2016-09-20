var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('../webpack.config.js');

gulp.task('build', [
	'lint:scss', 
	'lint:js', 
	'test'
], function() {
  return gulp.src('src/entry.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/'));
});