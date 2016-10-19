var webpack = require('webpack');
var path = require('path');
var jsLoader = require('./webpack/loader.js.js');
var jsxLoader = require('./webpack/loader.jsx.js');
var cssLoader = require('./webpack/loader.css.js');
var scssLoader = require('./webpack/loader.scss.js');
var svgLoader = require('./webpack/loader.svg.js');
var alias = require('./webpack/alias.js');
var extensions = require('./webpack/extensions.js');

module.exports = {
    entry: ['babel-polyfill', './app/main.jsx'],
    output: {
        path: './dist',
        filename: 'deathmatchApp.js'
    },
    resolve: {
        root: path.resolve(__dirname),
        alias: alias,
        extensions: extensions
    },
    module: {
        loaders: [
            jsLoader,
            jsxLoader,
            cssLoader,
            scssLoader,
            svgLoader
        ]
    },
    plugins: [],
    devtool: 'cheap-module-source-map'
};