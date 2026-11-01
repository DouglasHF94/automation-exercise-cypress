const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.automationexercise.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    viewportWidth: 1366,
    viewportHeight: 900,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    requestTimeout: 15000,
    responseTimeout: 30000,
    video: false,
    screenshotOnRunFailure: true,
    retries: {
      runMode: 1,
      openMode: 0
    },
    setupNodeEvents(on, config) {
      return config;
    }
  }
});
