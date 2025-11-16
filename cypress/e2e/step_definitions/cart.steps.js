import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { ProductPage } from "../../pages/product.page";
import { CartPage } from "../../pages/cart.page";

const Dado = Given;
const Quando = When;
const Então = Then;

const productPage = new ProductPage();
const cartPage = new CartPage();

// -----------------------------
// LOGIN
// -----------------------------
Dado("que estou logada", () => {
  cy.login("validUser");
  cy.visit("/");
  productPage.productList().should("be.visible");
});

// -----------------------------
// ADICIONAR PRODUTO AO CARRINHO
// -----------------------------
Dado("adiciono um produto ao carrinho", () => {
  productPage.selectProduct().click();
  productPage.selectSize("M");
  productPage.selectColor("Orange");
  productPage.clickBuy();

  // mensagem de confirmação
  productPage
    .confirmationMessage({ timeout: 10000 })
    .should("be.visible")
    .and("contain", "foi adicionado no seu carrinho");

  // botão ver carrinho
  productPage
    .viewCartButton({ timeout: 10000 })
    .should("be.visible")
    .and("not.have.attr", "disabled");
  productPage.viewCartButton().click();
});

// -----------------------------
// ABRIR CARRINHO
// -----------------------------
Quando("abro o carrinho", () => {
  // Caso queira garantir visita direta, útil se o click não navegar
  cy.url().then((url) => {
    if (!url.includes("/carrinho")) {
      cy.visit("/carrinho");
    }
  });

  cy.get("tr.cart_item input.qty.input-text")
    .clear()
    .type("1")
    .should("have.value", "1");
});

// -----------------------------
// VALIDAÇÕES DO CARRINHO
// -----------------------------
Então("o nome do produto é exibido", () => {
  cartPage.productName().should("exist").and("be.visible").and("not.be.empty");
});

Então("o preço unitário é exibido", () => {
  cartPage.productPrice().should("exist").and("be.visible").and("not.be.empty");
});

Então("o subtotal é exibido", () => {
  cartPage
    .productSubtotal()
    .should("exist")
    .and("be.visible")
    .and("not.be.empty");
});

Então("a quantidade do produto é 1", () => {
  cartPage.productQuantity().should("have.value", "1");
});

Então("o botão de finalizar compra está disponível", () => {
  cartPage.checkoutButton().should("be.visible").and("not.be.disabled");
});
