module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/recommended', 'prettier/vue', 'plugin:prettier/recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        arrowParens: 'always',
        bracketSpacing: true,
        printWidth: 100,
        tabWidth: 2,
        semi: false,
        singleQuote: true,
      },
    ],
    'vue/no-unused-components': [
      'warn',
      {
        ignoreWhenBindingPresent: true,
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
