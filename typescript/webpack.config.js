const path = require('path')
const merge = require('webpack-merge')

const commonConfig = {
    entry: path.resolve(__dirname, 'src/index.js'),
    mode: 'production',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    output: {
        library: 'kielbasa',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        umdNamedDefine: true,
    },
    target: 'web',
}

const webConfig = merge(commonConfig, {
    mode: 'production',
    output: {
        filename: 'kielbasa.min.js',
    },
    target: 'web',
})

const serverConfig = merge(commonConfig, {
    mode: 'development',
    output: {
        filename: 'kielbasa.js',
    },
    target: 'node',
})

module.exports = [webConfig, serverConfig]
