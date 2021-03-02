module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:vue/essential',
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'vue',
    ],
    rules: {
        indent: ['error', 4],
        'quote-props': 'off',
        'func-names': 'off',
        'object-shorthand': 'off',
        'no-bitwise': 'off',
        'no-plusplus': 'off',
        'eqeqeq': 'off',
        'max-len': 'off',
        'prefer-destructuring': 'off',
        'no-restricted-syntax': 'off',
        'guard-for-in': 'off',
        'no-underscore-dangle': 'off',
        'no-param-reassign': 'off',
        'no-alert': 'off',
        'consistent-return': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'no-return-assign': 'off',
        'no-unused-expressions': 'off',
        'radix': 'off',
        'no-mixed-operators': 'off',
        'no-else-return': 'off',
        'camelcase': 'off',
        'no-restricted-properties': 'off',
    },
};
