var path = require('path');

module.exports = {
    test: /\.js$/,
    include: [
        path.resolve(__dirname, "../", "app"),
        path.resolve(__dirname, "../", "node_modules/deathmatch-components")
    ],
    loader: 'babel',
    query: {
        presets: ['es2015']
    }
};