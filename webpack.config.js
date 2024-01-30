
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // module: {
    //     rules: [
    //         {
    //             test: /\.txt$/,
    //             loader: 'raw-loader'
    //         }
    //     ]
    // },

    entry: './src/index.js',

    output: {
        //path: path.resolve(__dirname, 'result'),
        //filename: 'index.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}

