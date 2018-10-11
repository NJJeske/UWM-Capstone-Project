
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: './src/client',
    entry: ['./app.js'],
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }, {
                test: /\.(scss|sass)$/,
                loader: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader', // compiles Sass to CSS
                ]
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Trails',
            favicon: '../server/template/favicon.ico',
            template: '../server/template/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](react.*)[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        }
    }
};
