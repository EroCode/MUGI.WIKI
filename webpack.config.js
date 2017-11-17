const path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                'postcss-loader'
            ]
            // use: ExtractTextPlugin.extract({
            //     fallback: 'style-loader',
            //     use: [{
            //             loader: 'css-loader',
            //             options: {
            //                 importLoaders: 1
            //             }
            //         },
            //         'postcss-loader'
            //     ]
            // })
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /(\.jsx|\.js)$/,
            use: [
                'babel-loader',
                'eslint-loader'
            ],
            exclude: /node_modules/
        }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // new ExtractTextPlugin('bundle.css'),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: 'src/index.html'
        })
    ]
};