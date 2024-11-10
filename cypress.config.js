const { defineConfig } = require("cypress");

module.exports = defineConfig({


  e2e: {
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
      reportFilename: "[status]_[datetime]-report",
      timestamp: "isoDateTime",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      overwrite: false,
      html: true,
      json: true,
    },


    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});
