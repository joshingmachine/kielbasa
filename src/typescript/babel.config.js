module.exports = {
    plugins: [
        '@babel/proposal-class-properties',
        '@babel/proposal-object-rest-spread',
    ],
    presets: [
        [
            '@babel/preset-typescript',
            '@babel/preset-env',
            {
                targets: {
                    node: true,
                },
            },
        ],
    ],
}
