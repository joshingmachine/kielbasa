module.exports = {
    parser:  '@typescript-eslint/parser',
    extends: [
        'joshingmachine',
        'plugin:@typescript-eslint/recommended',
    ],
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
