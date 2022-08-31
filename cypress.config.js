const { defineConfig } = require('cypress');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  e2e: {
    reporter: "cypress-multi-reporters",
    reporterOptions: {
        configFile: "reporter-config.json"
    },
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})