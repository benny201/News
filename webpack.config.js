var webpack = require('webpack')
var path = require('path')
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录，以此类推

module.exports = {
    context: __dirname + '/src',
    // entry: "./js/index.js",
    entry: [
        'webpack-dev-server/client?http://localhost:8080/',
        './js/root.js'
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            include: [APP_PATH],
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        },
            {
                test: /\.css$/,
                //loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                loader: 'style-loader!css-loader'

            },

        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    },
    output: {
        path: __dirname + "/src/",
        publicPath:'https://benny201.github.io/News/',
        filename: "bundle.js"
    }
};

// var path = require('path');
// var webpack = require('webpack');
//
// module.exports = {
//     entry: [
//         // "babel-polyfill",
//         [__dirname, '.', '..', 'src', 'js', 'react', 'index.js'].join(path.sep)
//     ],
//
//     resolve: {
//         modulesDirectories: ["/node_modules", "/node_modules/babel"]
//     },
//
//     resolveLoader: {
//         root: path.resolve(__dirname, 'node_modules')
//     },
//
//     output: {
//         path: [__dirname, '.', '..', 'News', 'src', 'js', 'react'].join(path.sep),
//         filename: 'bundle.js'
//     },
//
//     module: {
//         loaders: [
//             {
//                 include: path.resolve(__dirname, '../src/js'),
//                 exclude: /(node_modules)/,
//                 test: /\.jsx?$/,
//                 loader: 'babel',
//                 query: {
//                     presets: [
//                         'babel-preset-stage-1',
//                         'babel-preset-es2015',
//                         'babel-preset-react'
//                     ].map(require.resolve)
//                 }
//             }
//         ]
//     }
// };
