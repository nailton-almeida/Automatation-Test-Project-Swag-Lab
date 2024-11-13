const { defineConfig } = require("cypress");

module.exports = defineConfig({


  e2e: {
    browser: 'chrome',
    baseUrl: "https://www.saucedemo.com",
    defaultCommandTimeout: 5000,
    watchForFileChanges: false,
    video: false,
    chromeWebSecurity: false,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportDir: './cypress/reports/mochawesome',
      reportPageTitle: 'SwagLab Test Project',
      reportFilename: "report",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      overwrite: true,
      html: true,
      json: true,
    },


    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});
