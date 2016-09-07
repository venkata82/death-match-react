var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: ['babel-polyfill', './app/main.jsx'],
    output: {
        path: './build',
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
            notification: 'app/containers/notification/notification.jsx',
            notificationList: 'app/containers/notification/notificationList.jsx',
            warriorsList: 'app/containers/warriorsList/warriorsList.jsx',            

            // actions
            actions: 'app/actions/index.js',
            
            // constants directory
            constants: 'app/constants',

            // reducers directory
            reducers: 'app/reducers'

        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { 
                test: /\.js?$/, 
                exclude: /(spec|test|node_modules)/, 
                loader: 'babel', 
                query: { 
                    presets: ['es2015'], 
                    plugins: ['rewire']
                }
            },
            { 
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel', 
                query: { 
                    presets: ['react', 'es2015'],
                    plugins: ['rewire']
                }
            }
        ]
    },
    devtool: 'inline-source-map'
};

