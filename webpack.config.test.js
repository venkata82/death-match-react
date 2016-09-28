var webpack = require('webpack');
var path = require('path');
var jsLoader = require('./webpack/loader.js.js');
var jsxLoader = require('./webpack/loader.jsx.js');
var cssLoader = require('./webpack/loader.css.js');
var scssLoader = require('./webpack/loader.scss.js');
var alias = require('./webpack/alias.js');
var extensions = require('./webpack/extensions.js');

// add an addition alias for sinon
alias.sinon = 'sinon/pkg/sinon';

// setup the loader plugins
var loaderPlugins = [
    ['rewire', { 'exclude': ['**/*.spec.*'] } ],
    ['istanbul', { 'exclude': ['**/*.spec.*'] } ]
];

// append the rewire and istandul plugins for js and jsx
// TODO: allow an option to not run coverage for debugging
jsLoader.query.plugins = loaderPlugins;
jsxLoader.query.plugins = loaderPlugins;

module.exports = {
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
            scssLoader
        ],
        noParse: [ /node_modules\/sinon\// ]
    },
    // workaround for module resolve issues, see: https://github.com/airbnb/enzyme/issues/302
    externals: { 
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true
    },
    devtool: 'cheap-module-source-map'
};