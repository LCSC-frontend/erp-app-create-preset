module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never',
    }],
    'no-param-reassign': [2, { "props": false }],
    'max-le': [0, 160, 4],
  },
  parserOptions: {
    'parser': 'babel-eslint',
  },
};
