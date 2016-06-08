var gulp = require('gulp');

// ====================================
// scss tasks
// ====================================
var sass = require('gulp-sass');
var scssFiles = './scss/**/*.scss';

gulp.task('sass', function () {
  return gulp.src(scssFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(scssFiles, ['sass']);
});

// ====================================
// testing tasks 
// ====================================
var Server = require('karma').Server;

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

// ====================================
// lint tasks 
// ====================================

var scsslint = require('gulp-scss-lint');
var jshint = require('gulp-jshint');
 
gulp.task('scss-lint', function() {
  return gulp.src('./scss/*.scss')
    .pipe(scsslint());
});

gulp.task('js-lint', function() {
  return gulp.src('./app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


// ====================================
// build tasks 
// ====================================
gulp.task('build', [
	'scss-lint', 
	'js-lint', 
	'test', 
	'sass'
]);
