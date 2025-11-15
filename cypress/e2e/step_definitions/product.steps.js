// cypress/e2e/step_definitions/product.steps.js

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { productPage } from "../../pages/product.page";

const Dado = Given;
const Quando = When;
const Então = Then;

// LOGIN antes de tudo
Dado("que estou logada na plataforma", () => {
  cy.login("validUser");
});

// lista de produtos
Dado("visualizo a lista de produtos disponível", () => {
  productPage.productList().should("be.visible");
});

// selecionar produto
Quando("seleciono o produto desejado", () => {
  productPage.selectProduct().click();
});

// tamanho
Quando("escolho o tamanho do produto", () => {
  productPage.selectSize("M"); // ajuste se quiser parametrizar
});

// cor
Quando("escolho a cor do produto", () => {
  productPage.selectColor("Blue"); // ajuste se quiser parametrizar
});

// comprar
Quando("seleciono a opção comprar", () => {
  productPage.clickBuy();
});

// mensagem de sucesso
Então("vejo a mensagem de confirmação de que o produto foi adicionado", () => {
  productPage
    .confirmationMessage()
    .should("be.visible")
    .and("contain", "foi adicionado no seu carrinho");
});

// botão ver carrinho
Então("o botão Ver carrinho é exibido e está habilitado", () => {
  productPage.viewCartButton().should("be.visible").and("be.enabled");
});
