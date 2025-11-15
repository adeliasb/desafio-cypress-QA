// cypress/support/hooks.js
import { Before, After } from "cypress-cucumber-preprocessor/steps";

//executa antes de cada cenário
Before(() => {
  cy.log("Executando Before");
  cy.clearCookies();
  cy.clearLocalStorage();
});

// executa depois de cada cenário
After(() => {
  cy.log("Executando logout no After do Cucumber");
  // garante que ninguém fique logado após o cenário
  cy.logout();
});
