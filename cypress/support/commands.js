// comandos customizados reutilizáveis
Cypress.Commands.add("login", (userAlias = "validUser") => {
  // carrega fixture users.json e usa a página de login (POM) para realizar login
  cy.fixture("users").then((users) => {
    const { LoginPage } = require("../pages/login.page"); // se implementar
    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.login(users[userAlias].username, users[userAlias].password);
  });
});
