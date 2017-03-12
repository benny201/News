var webpack = require('webpack')
var path = require('path')
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录，以此类推

module.exports = {
    context: __dirname + '/src',
    entry: [
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
                loader: 'style-loader!css-loader'

            },

        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    },
    output: {
        path: __dirname + "/src/",
        publicPath:'https://benny201.github.io/News/',
        filename: "bundle.js"
    }
};
