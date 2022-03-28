module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  globals: {
    localStorage: true,
    fetch: true
  },
  extends: ['plugin:react/recommended', 'prettier', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'multiline-ternary': 'never'
  }
}
