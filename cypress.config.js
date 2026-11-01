
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    charts: true,
    reportPageTitle: "Automation Exercise - Relatório",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {
    baseUrl: "https://www.automationexercise.com",

    specPattern: "cypress/e2e/**/*.cy.js",

    supportFile: "cypress/support/e2e.js",

    viewportWidth: 1366,
    viewportHeight: 900,

    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,

    video: false,
    screenshotOnRunFailure: true,

    retries: {
      runMode: 1,
      openMode: 0
    },

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    }
  }
});
