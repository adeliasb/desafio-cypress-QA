// cypress/pages/product.page.js

export class ProductPage {
  productList() {
    return cy.get(".products");
  }

  selectProduct() {
    return cy.get("[data-product-id='4078']").find("a").first();
  }

  selectSize(size) {
    cy.get(`#product-4078 li.button-variable-item-${size}`).click();
  }

  selectColor(color) {
    cy.get(`#product-4078 li.button-variable-item-${color}`, { timeout: 15000 })
      .and("not.be.disabled")
      .click();
  }

  clickBuy() {
    cy.get("button.single_add_to_cart_button").should("be.visible").click();
  }

  confirmationMessage() {
    return cy.get(".woocommerce-message");
  }

  viewCartButton() {
    return cy.get(".woocommerce-message a.wc-forward");
  }
}

export const productPage = new ProductPage();
