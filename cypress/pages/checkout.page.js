// cypress/pages/checkout.page.js

export class CheckoutPage {
  // -----------------------------
  // CAMPOS DE FATURAMENTO
  // -----------------------------
  billingFirstName() {
    return cy.get("#billing_first_name");
  }

  billingLastName() {
    return cy.get("#billing_last_name");
  }

  billingCountryContainer() {
    return cy.get("#select2-billing_country-container");
  }

  billingCountrySearch() {
    return cy.get(".select2-search__field");
  }

  billingAddress1() {
    return cy.get("#billing_address_1");
  }

  billingCity() {
    return cy.get("#billing_city");
  }

  billingStateContainer() {
    return cy.get("#select2-billing_state-container");
  }

  billingStateSearch() {
    return cy.get(".select2-search__field");
  }

  billingPostcode() {
    return cy.get("#billing_postcode");
  }

  billingPhone() {
    return cy.get("#billing_phone");
  }

  billingEmail() {
    return cy.get("#billing_email");
  }

  // -----------------------------
  // RESUMO DO PEDIDO
  // -----------------------------
  orderReview(options = {}) {
    return cy.get("form.checkout .details-review > div", options);
  }

  paymentMethod(method) {
    return cy.get(`input[name="payment_method"][value="${method}"]`);
  }

  termsCheckbox() {
    return cy.get("#terms");
  }

  placeOrderButton() {
    return cy.get("#place_order");
  }

  orderDetails() {
    return cy.get(".woocommerce-order");
  }

  orderReceivedMessage() {
    return cy.get(".woocommerce-thankyou-order-received");
  }

  orderNumber() {
    return cy.get(".woocommerce-order-overview__order strong");
  }

  orderDate() {
    return cy.get(".woocommerce-order-overview__date strong");
  }

  orderEmail() {
    return cy.get(".woocommerce-order-overview__email strong");
  }

  orderTotal() {
    return cy.get(".woocommerce-order-overview__total strong");
  }

  orderPaymentMethod() {
    return cy.get(".woocommerce-order-overview__payment-method strong");
  }

  // Tabela de itens do pedido
  orderItems() {
    return cy.get(".woocommerce-table.woocommerce-table--order-details");
  }

  // Endereço de faturamento
  billingDetails() {
    return cy.get(".woocommerce-customer-details address");
  }
}

export const checkoutPage = new CheckoutPage();
