export class LoginPage {
  visit() {
    cy.visit("/minha-conta");
  }

  fillCredencials(username, password) {
    cy.get("#username").clear().type(username);
    cy.get("#password").clear().type(password);
  }

  submit() {
    cy.get("#customer_login > div:nth-child(1) > form > input.button").click();
  }

  login(username, password) {
    this.visit();
    this.fillCredencials(username, password);
    this.submit();
  }

  welcomeMessageContent() {
    return cy.get(".woocommerce-MyAccount-content");
  }

  accountPanel() {
    return cy.get(".woocommerce-MyAccount-navigation");
  }

  welcomeMessageTopbar() {
    return cy.get(
      "#tbay-topbar > div > div > div > ul > li:nth-child(1) > a > span"
    );
  }
}

export const loginPage = new LoginPage();
