module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'standard',
		'eslint-config-prettier',
	],
	overrides: [
		{
			files: ['*/.spec.js', '*/.spec.jsx', './src/App.test.js'],
			env: {
				jest: true,
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'testing-library', 'jest-dom', 'jest'],
	rules: {},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
