import HomePage from "../pages/HomePage";

describe("Automation Exercise | Fluxo de compra", () => {
  let user;

  beforeEach(() => {
    cy.fixture("user").then((data) => {
      user = {
        ...data,
        email: `order.${Date.now()}.${Cypress._.random(1000, 9999)}@example.com`
      };
    });
  });

  it("TC15 - deve registrar o usuário antes de realizar a compra", () => {
    cy.visitHome();
    cy.createAccount(user);
    cy.addFirstProductToCart();
    cy.completeCheckout();
    cy.deleteCurrentAccount();
  });

  it("TC16 - deve realizar compra após login do usuário", () => {
    cy.visitHome();
    cy.createAccount(user);
    HomePage.logout();

    cy.loginWith(user.email, user.password);
    HomePage.assertLoggedInAs(user.name);

    cy.addFirstProductToCart();
    cy.completeCheckout();
    cy.deleteCurrentAccount();
  });
});
