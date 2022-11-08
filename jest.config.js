require('dotenv').config();
// eslint-disable-next-line no-console
console.log(process.env);
module.exports = {
	collectCoverage: true,
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: -10,
		},
	},
	testEnvironment: 'jsdom',
	trasformIgnorePatterns: [],
};
