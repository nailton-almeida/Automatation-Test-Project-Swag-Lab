const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: "https://www.saucedemo.com",
    defaultCommandTimeout: 5000,
    watchForFileChanges: false,
    video: false,
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {

    },
  },
});
