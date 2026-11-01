class HomePage {
  assertHomeVisible() {
    cy.get("body").should("be.visible");
    cy.contains("a", "Home").should("be.visible");
    cy.contains("h2", /Full-Fledged practice website for Automation Engineers/i)
      .should("be.visible");
  }

  openLogin() {
    cy.get('a[href="/login"]').should("be.visible").click();
  }

  openProducts() {
    cy.get('a[href="/products"]').should("be.visible").click();
    cy.url().should("include", "/products");
    cy.contains("h2", "All Products").should("be.visible");
  }

  openCart() {
    cy.get('a[href="/view_cart"]').first().click();
    cy.url().should("include", "/view_cart");
  }

  assertLoggedInAs(name) {
    cy.contains("a", `Logged in as ${name}`).should("be.visible");
  }

  logout() {
    cy.get('a[href="/logout"]').should("be.visible").click();
  }

  deleteAccount() {
    cy.get('a[href="/delete_account"]').should("be.visible").click();
  }
}

export default new HomePage();
