module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    '@vue/typescript/recommended',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  parserOptions: {
    ecmaVersion: 2021,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': ['off', { ignoreRestArgs: true }],
    'max-len': [
      1,
      {
        code: 130,
      },
    ],
    'class-methods-use-this': [1,
      {
        exceptMethods: [
          'fields',
        ],
      },
    ],
    'no-debugger': 'error',
    'no-console': 'warn',
    'no-param-reassign': ['error', { props: false }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
