module.exports = {
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: ['./jest/server.js'],
  reporters: ['default', 'jest-junit'],
};
