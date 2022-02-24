module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  globals: {
    page: true,
  },
  rules: {
    // v.1.5 (2021-10-14)
    '@typescript-eslint/no-explicit-any': 0,
    'arrow-parens': [1, 'as-needed'],
    'brace-style': [1, 'stroustrup', { allowSingleLine: true }],
    'class-methods-use-this': 0,
    'func-names': [1, 'always', { generators: 'never' }],
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-console': [1, { allow: ['error', 'info', 'warning'] }],
    'no-return-assign': 0,
    'linebreak-style': 0,
    'object-curly-newline': [
      0,
      {
        ObjectExpression: 'always',
        ObjectPattern: { minProperties: 2 },
      },
    ],
    'no-plusplus': [1, { allowForLoopAfterthoughts: true }],
  },
};
