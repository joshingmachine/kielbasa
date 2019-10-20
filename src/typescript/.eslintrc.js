module.exports = {
    parser:  '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
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
        project: './tsconfig.json',
        sourceType: 'module',
    },
    rules: {
        '@typescript-eslint/member-delimiter-style': 'off',
    },
}
