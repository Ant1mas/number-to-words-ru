module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'rules': {
    'arrow-parens': 'warn',
    'operator-linebreak': 'off',
    'no-unused-vars': 'warn',
    'max-len': 'warn',
    'indent': 'off',
  },
};
