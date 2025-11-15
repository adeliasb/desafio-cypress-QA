export class LoginPage {
  // Abre a página de login da Ebac
  visit() {
    cy.visit("/minha-conta");
  }

  // Preenche usuário e senha
  fillCredencials(username, password) {
    cy.get("#username").clear().type(username);
    cy.get("#password").clear().type(password);
  }

  // Clica no botão de login
  submit() {
    cy.get("#customer_login > div:nth-child(1) > form > input.button").click();
  }

  // Fluxo completo de login
  login(username, password) {
    this.visit(); // abre a página
    this.fillCredencials(username, password); // preenche usuário e senha
    this.submit(); // envia
  }

  // Retorna a mensagem de boas-vindas dentro do conteúdo da conta
  welcomeMessageContent() {
    return cy.get(".woocommerce-MyAccount-content");
  }

  // Retorna o painel lateral da conta
  accountPanel() {
    return cy.get(".woocommerce-MyAccount-navigation");
  }

  // Retorna a mensagem de boas-vindas no topo da página
  welcomeMessageTopbar() {
    return cy.get(
      "#tbay-topbar > div > div > div > ul > li:nth-child(1) > a > span"
    );
  }
}

export const loginPage = new LoginPage();
