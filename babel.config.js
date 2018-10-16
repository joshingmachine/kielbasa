module.exports = {
    plugins: [],
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: true,
                },
            },
        ],
    ],
}
