module.exports = {
	extends: 'standard',
	rules: {
		'semi': ['error', 'always'],
		'indent': ['error', 'tab', {'SwitchCase': 1}],
		'no-tabs': 0,
		'comma-dangle': ['error', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'always-multiline',
		}],
	},
};
