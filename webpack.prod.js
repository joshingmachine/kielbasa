const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const path = require('path')

module.exports = merge(common, {
    entry: {
        'kielbasa.min': path.resolve(__dirname, 'src/index.js'),
    },
    mode: 'production',
})
