module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    complexity: ['error', { max: 4 }],
    'import/no-duplicates': 'error',
    'max-depth': ['error', { max: 2 }],
    'max-params': ['error', { max: 4 }],
    'max-statements-per-line': ['error', { max: 1 }],
    'no-param-reassign': 'error',
    'max-nested-callbacks': ['error', { max: 1 }],
  },
};
