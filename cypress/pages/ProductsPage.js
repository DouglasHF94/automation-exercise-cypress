class ProductsPage {
  assertProductsPage() {
    cy.url().should("include", "/products");
    cy.contains("h2", "All Products").should("be.visible");
    cy.get(".features_items .product-image-wrapper").should("have.length.greaterThan", 0);
  }

  openFirstProduct() {
    cy.get(".features_items .product-image-wrapper")
      .first()
      .find('a[href^="/product_details/"]')
      .first()
      .click({ force: true });
    cy.url().should("include", "/product_details/");
  }

  assertProductDetails() {
    cy.get(".product-information").should("be.visible").within(() => {
      cy.get("h2").should("not.be.empty");
      cy.contains("p", "Category:").should("be.visible");
      cy.contains("span", "Rs.").should("be.visible");
      cy.contains("p", "Availability:").should("be.visible");
      cy.contains("p", "Condition:").should("be.visible");
      cy.contains("p", "Brand:").should("be.visible");
    });
  }

  search(term) {
    cy.get("#search_product").should("be.visible").type(term);
    cy.get("#submit_search").click();
  }

  assertSearchResults() {
    cy.contains("h2", "Searched Products").should("be.visible");
    cy.get(".features_items .product-image-wrapper").should("have.length.greaterThan", 0);
  }
}

export default new ProductsPage();
