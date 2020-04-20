module.exports = {
	extends: [
		'wikimedia',
		'wikimedia/node',
	],
	rules: {
		'comma-dangle': [ 'error', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'always-multiline',
		} ],
	},
};
