// cypress/e2e/step_definitions/checkout.steps.js

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { productPage } from "../../pages/product.page";
import { cartPage } from "../../pages/cart.page";
import { checkoutPage } from "../../pages/checkout.page";

const Dado = Given;
const Quando = When;
const Então = Then;

// -----------------------------
// CONCLUIR COMPRA ATÉ O CHECKOUT
// -----------------------------
Dado("que concluo a compra do produto que está no carrinho", () => {
  cy.login("validUser");
  cy.visit("/");

  productPage.productList().should("be.visible");
  productPage.selectProduct().click();
  productPage.selectSize("M");
  cy.wait(1000);
  productPage.selectColor("Orange");
  productPage.clickBuy();
  productPage.confirmationMessage({ timeout: 1000 }).should("be.visible");
  productPage.viewCartButton().click();

  // Captura dos valores reais para validar no checkout e no thank you page
  cy.get("td.product-subtotal")
    .invoke("text")
    .then((txt) => txt.trim())
    .as("subtotalCart");

  cy.get(".order-total .woocommerce-Price-amount")
    .invoke("text")
    .then((txt) => txt.trim())
    .as("totalCart");

  cartPage.checkoutButton().click();
});

// -----------------------------
// NO CHECKOUT
// -----------------------------
Dado("estou no checkout", () => {
  cy.url().should("include", "/checkout");
  checkoutPage.orderReview({ timeout: 10000 }).should("be.visible");
});

// -----------------------------
// PREENCHER FORMULÁRIO DE FATURAMENTO COM FIXTURE
// -----------------------------
Dado("preencho o formulário de faturamento que é exibido", () => {
  cy.fixture("users").then(({ checkoutUser }) => {
    checkoutPage.billingFirstName().clear().type(checkoutUser.firstName);
    checkoutPage.billingLastName().clear().type(checkoutUser.lastName);

    checkoutPage.billingCountryContainer().click();
    checkoutPage.billingCountrySearch().type("Brasil{enter}");

    checkoutPage.billingAddress1().clear().type(`${checkoutUser.address1}`);
    checkoutPage.billingCity().clear().type(checkoutUser.city);

    checkoutPage.billingStateContainer().click();
    checkoutPage.billingStateSearch().type("São Paulo{enter}");

    checkoutPage.billingPostcode().clear().type(checkoutUser.postcode);
    checkoutPage.billingPhone().clear().type(checkoutUser.phone);
    checkoutPage.billingEmail().clear().type(checkoutUser.email);
  });
});

// -----------------------------
// REVISÃO DO PEDIDO
// -----------------------------
Dado("confiro as informações do pedido", () => {
  checkoutPage.orderReview().should("be.visible");

  cy.get("@subtotalCart").then((expectedSubtotal) => {
    checkoutPage
      .orderReview()
      .find("tr.cart-subtotal td span bdi")
      .invoke("text")
      .then((txt) => {
        expect(txt.trim()).to.equal(expectedSubtotal);
      });
  });

  cy.get("@totalCart").then((expectedTotal) => {
    checkoutPage
      .orderReview()
      .find("tr.order-total td strong span bdi")
      .invoke("text")
      .then((txt) => {
        expect(txt.trim()).to.equal(expectedTotal);
      });
  });
});

// -----------------------------
// PAGAMENTO
// -----------------------------
Dado("seleciono a forma de pagamento", () => {
  checkoutPage.paymentMethod("bacs").check({ force: true });
});

// -----------------------------
// TERMOS
// -----------------------------
Dado("concordo com os termos e condições", () => {
  checkoutPage.termsCheckbox().check({ force: true });
});

// -----------------------------
// FINALIZAR
// -----------------------------
Quando("finalizo a compra", () => {
  checkoutPage.placeOrderButton().click();
});

// -----------------------------
// RESULTADO FINAL — VALIDAÇÃO COMPLETA
// -----------------------------
Então("vejo os detalhes do pedido exibidos", () => {
  checkoutPage.orderDetails({ timeout: 10000 }).should("be.visible");

  // Número do pedido
  checkoutPage.orderNumber().should("not.be.empty");

  // Data
  checkoutPage.orderDate().should("not.be.empty");

  // Email
  checkoutPage.orderEmail().should("contain", "qa.asbs.lab@gmail.com");

  // Pagamento
  checkoutPage.orderPaymentMethod().should("contain", "Transferência bancária");

  // Total deve ser igual ao total capturado no carrinho
  cy.get("@totalCart").then((expectedTotal) => {
    checkoutPage
      .orderTotal()
      .invoke("text")
      .should((orderTotal) => {
        expect(orderTotal.trim()).to.equal(expectedTotal);
      });
  });

  // Valida itens do pedido
  checkoutPage
    .orderItems()
    .should("contain", "Augusta Pullover Jacket")
    .and("contain", "M, Orange");

  // Validação do endereço com fixture
  cy.fixture("users").then(({ checkoutUser }) => {
    checkoutPage.orderEmail().should("contain", checkoutUser.email);

    checkoutPage
      .billingDetails()
      .should("contain", checkoutUser.firstName + " " + checkoutUser.lastName)
      .and("contain", checkoutUser.address1)
      .and("contain", checkoutUser.city)
      .and("contain", "São Paulo")
      .and("contain", checkoutUser.postcode)
      .and("contain", checkoutUser.phone)
      .and("contain", checkoutUser.email);
  });

  Então("vejo uma mensagem informando que o pedido foi recebido", () => {
    checkoutPage
      .orderReceivedMessage()
      .should("be.visible")
      .and("contain", "pedido foi recebido");
  });
});
