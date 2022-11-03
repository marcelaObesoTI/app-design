module.exports = {
	root: true,
	extends: [
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'standard',
		'eslint-config-prettier',
		'react-app/jest',
		'plugin:testing-library/react',
		'plugin:jest-dom/recommended',
	],

	rules: {
		'react/no-danger': 'off',
		'react/react-in-jsx-scope': 'off',
		'no-console': 'error',
		'prettier/prettier': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx'],
			},
			'babel-module': {
				extensions: ['.js', '.jsx'],
				alias: {
					'@/components': './components',
					'@/styles': './styles',
				},
			},
		},
	},
	env: {
		node: true,
		browser: true,
		amd: true,
	},
};
