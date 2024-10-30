const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    defaultCommandTimeout: 5000,
    watchForFileChanges: false,
    video: false,
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {

    },
  },
});
