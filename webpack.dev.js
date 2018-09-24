const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    mode: 'development',
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
        filename: 'kielbasa.js',
        library: 'kielbasa',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        umdNamedDefine: true,
    },
    target: 'node',
}
