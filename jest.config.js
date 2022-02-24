module.exports = {
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: ['./jest/server.js'],
  reporters: ['jest-junit'],
  collectCoverage: true,
};
