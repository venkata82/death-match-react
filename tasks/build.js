var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');

webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));

gulp.task('build', [
    'clean:dist',
    'lint:scss',
    'lint:js',
    'lint:jsx',
    'test'
], function(callback) {
    webpack(webpackConfig, function(err, stats) {
        if (err) throw new gutil.PluginError("build", err);
        gutil.log("[build]", stats.toString({
            colors: true
        }));
        callback();
    });
});
