var webpack = require('webpack')
var path = require('path')

module.exports = {
    context: __dirname + '/src',
    entry: "./js/index.js",
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    output: {
        path: __dirname + "/src/",
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
