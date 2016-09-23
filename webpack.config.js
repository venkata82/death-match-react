var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: ['babel-polyfill', './app/main.jsx'],
    output: {
        path: './dist',
        filename: '[name].built.js'
    },
    resolve: {
        root: path.resolve(__dirname),
        alias: {
            // components
            header: 'app/components/header/header.jsx',
            warrior: 'app/components/warrior/warrior.jsx',
            warriorDetail: 'app/components/warriorDetail/warriorDetail.jsx',
            content: 'app/components/content/content.jsx',

            // containers
            leaderboard: 'app/containers/leaderboard/leaderboard.jsx',
            matchup: 'app/containers/matchup/matchup.jsx',
            notificationWrapper: 'app/containers/notification/notificationWrapper.jsx',
            notificationList: 'app/containers/notification/notificationList.jsx',
            warriorsList: 'app/containers/warriorsList/warriorsList.jsx',

            // actions
            actions: 'app/actions/index.js',

            // constants directory
            constants: 'app/constants',

            // reducers directory
            reducers: 'app/reducers',

            // deathmatch components directory
            dmc: 'node_modules/deathmatch-components/dist'

        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: ['rewire']
                }
            }, 
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['rewire']
                }
            }, 
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, 
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            }
        ]
    },
    devtool: 'cheap-module-source-map'
};