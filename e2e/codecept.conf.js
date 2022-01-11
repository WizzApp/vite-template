require('ts-node/register');

exports.config = {
  tests: './**/*.test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost:4000',
      show: true,
      browser: 'chromium',
    },
  },
  include: {
    I: './steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'e2e',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
