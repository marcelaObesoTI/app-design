module.exports = {
	collectCoverage: true,
	coverageThreshold: {
		global: {
			branches: 50,
			functions: 70,
			lines: 70,
			statements: -10,
		},
	},
	testEnvironment: 'jsdom',
};
