var gulp = require('gulp');
var Server = require('karma').Server;
var path = require('path');

gulp.task('test', function(done) {
    new Server({
        configFile: path.resolve(__dirname, '../') + '/karma.conf.js',
        singleRun: true
    }, done).start();
});