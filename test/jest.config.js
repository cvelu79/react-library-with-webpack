/**
 * Jest configurations
 */

const config = {
	rootDir: '../',
	moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'mjs'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/test/__mocks__/fileMock.js',
		'\\.(css|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
	},
	setupFilesAfterEnv: ['<rootDir>/test/enzyme.config.js'],
	testEnvironment: 'node',
	testEnvironmentOptions: { url: 'http://localhost' },
	testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
	testPathIgnorePatterns: ['\\\\node_modules\\\\', '<rootDir>/src/stories/'],
	transform: {
		'.*': '<rootDir>/node_modules/babel-jest',
	},
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	collectCoverageFrom: [
		'src/**/*.{js,jsx,mjs}',
		'!**/__tests__/**',
		'!**/config/**',
		'!**/node_modules/**',
		'!**/public/**',
		'!**/stories/**',
	],
	coverageDirectory: '<rootDir>/coverage',
	coveragePathIgnorePatterns: [
		'config',
		'dist',
		'node_modules',
		'.scannerwork',
		'public',
		'tools',
		'hooks',
		'__mocks__',
		'src/config/*',
		'src/constants/*',
		'src/store/*',
		'src/utils/index.js',
		'src/utils/polyfills.js',
		'src/index.js',
		'src/app.js',
		'src/reducers/index.js',
		'src/components/index.js',
		'src/modules/index.js',
		'src/containers/index.js',
		'src/stories/*',
		// '^.*\\.stories\\.[jt]sx?$',
	],
	coverageReporters: ['json', 'text', 'lcov', 'clover'],
	coverageThreshold: {
		global: {
			branches: 20,
			functions: 30,
			lines: 30,
			statements: 30,
		},
	},
	verbose: false,
};

module.exports = config;
