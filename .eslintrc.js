module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
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
  ignorePatterns: ['./src/lib/**/*.js', '**/vendor/*.js', '**/node_modules/*'],
  rules: { 'react/no-unescaped-entities': 0 }
}
