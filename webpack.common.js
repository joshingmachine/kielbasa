const path = require('path')

module.exports = {
    entry: {
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
}
