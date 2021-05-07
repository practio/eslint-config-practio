module.exports = {
  plugins: ['prettier', 'simple-import-sort'],
  extends: ['standard', 'prettier'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000[^\\.]+'], // nameless imports not starting with a "."
          ['^(@(?!practio))?\\w'], // builtins and externals (not from practio)
          ['^@practio/\\w'], // practio packages
          ['^[^.]'], // anything not starting with a "." (absolute imports)
          ['^\\.'], // relative imports
          ['^\\u0000\\.'], // nameless imports of local packages
        ],
      },
    ],
    'array-callback-return': 'off',
  },
};
