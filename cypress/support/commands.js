// comandos customizados reutilizáveis
Cypress.Commands.add("login", (userAlias = "validUser") => {
  cy.fixture("users").then((users) => {
    const { LoginPage } = require("../pages/login.page");
    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.login(users[userAlias].username, users[userAlias].password);
  });
});

Cypress.Commands.add("logout", () => {
  cy.visit("/minha-conta");
  cy.get('#tbay-topbar a[href*="logout"]').click({ force: true });
});
