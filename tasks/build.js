var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');

gulp.task('build', [
    'lint:scss',
    'lint:js',
    'lint:jsx',
    // 'test',
    'clean:dist'
], function(callback) {
    var myConfig = Object.create(webpackConfig);
    webpack(myConfig, function(err, stats) {
        if (err) throw new gutil.PluginError("build", err);
        gutil.log("[build]", stats.toString({
            colors: true
        }));
        callback();
    });
});
