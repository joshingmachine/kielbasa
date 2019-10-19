module.exports = {
    extends: 'joshingmachine',
    overrides: [{
        files: 'tests/*.js',
        env: {
            jest: true,
        },
    }],
    parserOptions: {
        sourceType: 'module',
    },
}
