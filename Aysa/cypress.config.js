const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
      experimentalModifyObstructiveThirdPartyCode: true ,

      
    specPattern: "cypress/e2e",
    },

});
