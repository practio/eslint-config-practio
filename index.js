module.exports = {
  plugins: ['prettier'],
  extends: ['standard', 'plugin:prettier/recommended'],
  rules: {
    // 'quotes' and 'comma-dangle' must be aligned to what the config says in https://github.com/practio/prettier-config
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
  },
};
