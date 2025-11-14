// cypress.config.js
// Configuração principal do Cypress com integração do preprocessor cucumber
const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    // Base da aplicação que vamos testar
    baseUrl: "http://lojaebac.ebaconline.art.br",
    // Pattern para encontrar os arquivos feature do cucumber
    specPattern: "cypress/e2e/features/*.feature",
    // Arquivo de suporte global
    supportFile: "cypress/support/e2e.js",

    setupNodeEvents(on, config) {
      // Registra o preprocessor para arquivos feature
      on("file:preprocessor", cucumber());
      return config;
    },
  },

  // Reporter mochawesome para relatórios HTML e JSON
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
});
