const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    env: {
      snapshotOnly: false
    },
    // baseUrl: 'https://reqres.in',
    videoCompression: 15,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
        configFile: "reporter-config.json"
    },
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})