var webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './app/main.jsx'],
    output: {
        path: './build',
        filename: '[name].built.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['es2015'], plugins: ['rewire'] } },
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['react', 'es2015'] } }
        ]
    },
    debug: true
};

