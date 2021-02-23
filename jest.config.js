module.exports = {
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: ['./jest/server.js'],
  reporters: ['default', 'jest-junit'],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura'],
};
