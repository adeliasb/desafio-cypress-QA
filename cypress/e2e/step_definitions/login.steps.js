import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { loginPage } from "../../pages/login.page";

const Dado = Given;
const Quando = When;
const Então = Then;

Dado("que eu estou na página de login", () => {
  cy.visit("/");
});

Quando("eu faço login com credenciais válidas", () => {
  cy.login("validUser");
});

// valida mensagem dentro do conteúdo
Então("eu vejo uma mensagem de boas vindas com o meu e-mail", () => {
  cy.fixture("users").then((users) => {
    const email = users.validUser.username;
    const emailPrefix = email.split("@")[0];
    loginPage
      .welcomeMessageContent()
      .should("be.visible", { timeout: 10000 })
      .and("contain", emailPrefix);
  });
});

// valida mensagem no topo
Então("vejo a mensagem de boas-vindas ao usuário no topo da página", () => {
  cy.fixture("users").then((users) => {
    const email = users.validUser.username;
    const emailPrefix = email.split("@")[0];
    loginPage
      .welcomeMessageTopbar()
      .should("be.visible")
      .and("contain", emailPrefix);
  });
});

// valida painel lateral
Então("também visualizo o painel da minha conta", () => {
  loginPage.accountPanel().should("be.visible");
});
