const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/client/App.tsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        proxy: {
            '/api': 'http://localhost:3000',
        },
        contentBase: './public',
        port: 3001,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/index.html',
            minify: {
              collapseWhitespace: true
            }
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                loader: 'file-loader',
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            }
        ]
    }
};