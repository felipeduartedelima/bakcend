export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: '../reports/coverage',
  coverageProvider: 'v8',
  rootDir: 'src',
  testMatch: [
    '<rootDir>/**/*.(spec|test).ts',
  ],
  collectCoverageFrom: [
    "**/*.(t|j)s"
  ],
  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover',
  ],
};