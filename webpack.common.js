const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        cli: path.resolve(__dirname, 'src/cli.js'),
        kielbasa: path.resolve(__dirname, 'src/index.js'),
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    output: {
        filename: '[name].js',
        library: 'kielbasa',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        umdNamedDefine: true,
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: '#! /usr/bin/env node',
            entryOnly: true,
            raw: true,
        }),
    ],
}
