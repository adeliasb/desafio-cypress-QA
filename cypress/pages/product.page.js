// cypress/pages/product.page.js

export class ProductPage {
  // lista de produtos
  productList() {
    return cy.get(".products");
  }

  // card do produto específico (usei seletor estável)
  selectProduct() {
    return cy.get(".product").first();
  }

  // dentro da página do produto
  selectSize(size) {
    cy.get("select#pa_size").select(size);
  }

  selectColor(color) {
    cy.get("select#pa_color").select(color);
  }

  clickBuy() {
    cy.get("button.single_add_to_cart_button").click();
  }

  // mensagem de confirmação
  confirmationMessage() {
    return cy.get(".woocommerce-message");
  }

  // botão ver carrinho
  viewCartButton() {
    return cy.get(".woocommerce-message a.button.wc-forward");
  }
}

export const productPage = new ProductPage();
