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
      reportFilename: "report_ui_mochawesome_smoke_test",
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
