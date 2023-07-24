import config from './jest.config';

export default {
  ...config,
  testMatch: [
    '<rootDir>/**/*.spec.ts',
  ],
};