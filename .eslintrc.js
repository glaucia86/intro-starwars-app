module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "no-console": "off",
    "no-multi-assign": "off",
    "prefer-template": "off",
    "no-plusplus": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off"
  },
};
