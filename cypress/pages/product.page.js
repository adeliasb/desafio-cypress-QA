// cypress/pages/product.page.js

export class ProductPage {
  // lista de produtos
  productList() {
    return cy.get(".products");
  }

  // card do produto específico (usei seletor estável)
  selectProduct() {
    return cy.get("[data-product-id='4078']").find("a").first();
  }

  // dentro da página do produto
  selectSize(size) {
    cy.get(`#product-4078 li.button-variable-item-${size}`).click();
  }

  selectColor(color) {
    //cy.get(`#product-4078 li.button-variable-item-${color}`).click();

    // Espera até que a variação de cor esteja habilitada
    cy.get(`#product-4078 li.button-variable-item-${color}`, { timeout: 15000 })
      .and("not.be.disabled") // garante que é clicável
      .click();
  }

  clickBuy() {
    cy.get("button.single_add_to_cart_button").should("be.visible").click();
  }

  // mensagem de confirmação
  confirmationMessage() {
    return cy.get(".woocommerce-message");
  }

  // botão ver carrinho
  viewCartButton() {
    return cy.get(".woocommerce-message a.wc-forward");
  }
}

export const productPage = new ProductPage();
