import ProductsPage from "../pages/ProductsPage";

describe("Automation Exercise | Produtos e assinatura", () => {
  it("TC08 - deve exibir a lista e os detalhes de um produto", () => {
    cy.visitHome();
    ProductsPage; // mantém o objeto de página explícito no cenário
    cy.get('a[href="/products"]').click();
    ProductsPage.assertProductsPage();
    ProductsPage.openFirstProduct();
    ProductsPage.assertProductDetails();
  });

  it("TC09 - deve pesquisar produtos pelo nome", () => {
    cy.visitHome();
    cy.get('a[href="/products"]').click();
    ProductsPage.assertProductsPage();
    ProductsPage.search("Top");
    ProductsPage.assertSearchResults();
  });

  it("TC10 - deve permitir inscrição na newsletter pela página inicial", () => {
    cy.visitHome();
    cy.get("footer").scrollIntoView();
    cy.contains("h2", "Subscription").should("be.visible");
    cy.get("#susbscribe_email")
      .should("be.visible")
      .type(`newsletter.${Date.now()}@example.com`);
    cy.get("#subscribe").click();
    cy.contains(".alert-success", "You have been successfully subscribed!")
      .should("be.visible");
  });
});
