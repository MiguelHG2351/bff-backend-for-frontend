const Htmlwebpackplugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: './frontend/app.js',
    output: {
        path: path.join(__dirname, 'backend/public'),
        filename: '[name].js'
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.css/,
                use: [ 
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 
                    'css-loader']
            }
        ]
    },
    plugins: [
        new Htmlwebpackplugin({
            template: './frontend/index.html',
            filename: './index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/bundle.css'
        })
    ],
    devtool: 'source-map'
}