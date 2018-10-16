module.exports = {
  extends: 'standard',
  rules: {
    'semi': ['error', 'always'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    "object-curly-spacing": ["error", "always"]
  },
};
