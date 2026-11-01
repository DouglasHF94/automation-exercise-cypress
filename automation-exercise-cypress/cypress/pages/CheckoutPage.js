class CheckoutPage {
  assertCartVisible() {
    cy.url().should("include", "/view_cart");
    cy.get("#cart_info").should("be.visible");
    cy.get("#cart_info tbody tr").should("have.length.greaterThan", 0);
  }

  proceedToCheckout() {
    cy.contains("a, button", "Proceed To Checkout").should("be.visible").click();
    cy.contains("h2", "Address Details").should("be.visible");
    cy.contains("h2", "Review Your Order").should("be.visible");
  }

  assertCheckoutDetails() {
    cy.get("#address_delivery").should("be.visible");
    cy.get("#address_invoice").should("be.visible");
    cy.get("#cart_info").should("be.visible");
  }

  placeOrder() {
    cy.get("#ordermsg textarea").type("Pedido de teste automatizado com Cypress.");
    cy.contains("a", "Place Order").click();
    cy.url().should("include", "/payment");
  }

  fillPayment() {
    cy.get('[data-qa="name-on-card"]').type("QA Cypress");
    cy.get('[data-qa="card-number"]').type("4111111111111111");
    cy.get('[data-qa="cvc"]').type("123");
    cy.get('[data-qa="expiry-month"]').type("12");
    cy.get('[data-qa="expiry-year"]').type("2030");
  }

  confirmPayment() {
    cy.get('[data-qa="pay-button"]').click();
  }

  assertOrderSuccess() {
    cy.get("body").should(($body) => {
      const text = $body.text();
      expect(
        text.includes("Your order has been placed successfully!") ||
        text.includes("Congratulations! Your order has been confirmed!")
      ).to.eq(true);
    });
  }
}

export default new CheckoutPage();
