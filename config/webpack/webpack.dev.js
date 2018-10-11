const merge = require('webpack-merge');
const common = require('./webpack-common');
process.traceDeprecation = true;

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        open: true,
        historyApiFallback: true
    }
});
