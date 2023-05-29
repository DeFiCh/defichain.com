const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "nfvd2a",
  fixturesFolder: false,
  viewportWidth: 1200,
  viewportHeight: 1000,
  requestTimeout: 8000,
  defaultCommandTimeout: 8000,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },

    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    testIsolation: false,
    
  },
});
