// cypress/pages/cart.page.js

export class CartPage {
  productName() {
    return cy.get(".cart_item .product-name");
  }

  productPrice() {
    return cy.get(".cart_item .product-price");
  }

  productSubtotal() {
    return cy.get(".cart_item .product-subtotal");
  }

  productQuantity() {
    return cy.get(".cart_item .qty");
  }

  checkoutButton() {
    return cy.get(".checkout-button");
  }
}

export const cartPage = new CartPage();
