import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import CheckoutPage from "../pages/CheckoutPage";

Cypress.Commands.add("visitHome", () => {
  cy.visit("/");
  HomePage.assertHomeVisible();
});

Cypress.Commands.add("openLogin", () => {
  HomePage.openLogin();
  LoginPage.assertLoginPage();
});

Cypress.Commands.add("createAccount", (user) => {
  cy.openLogin();
  SignupPage.signup(user);
  SignupPage.fillAccountInformation(user);
  SignupPage.assertAccountCreated();
  SignupPage.continueAfterCreation();
  HomePage.assertLoggedInAs(user.name);
});

Cypress.Commands.add("deleteCurrentAccount", () => {
  HomePage.deleteAccount();
  cy.contains("b", "Account Deleted!").should("be.visible");
  cy.get('[data-qa="continue-button"]').click();
});

Cypress.Commands.add("loginWith", (email, password) => {
  cy.openLogin();
  LoginPage.login(email, password);
});

Cypress.Commands.add("addFirstProductToCart", () => {
  HomePage.openProducts();
  cy.get(".features_items .product-image-wrapper")
    .first()
    .within(() => {
      cy.get("a.add-to-cart").first().click({ force: true });
    });
  cy.get(".modal-content").should("be.visible");
  cy.contains("button", "Continue Shopping").click();
});

Cypress.Commands.add("completeCheckout", () => {
  HomePage.openCart();
  CheckoutPage.assertCartVisible();
  CheckoutPage.proceedToCheckout();
  CheckoutPage.assertCheckoutDetails();
  CheckoutPage.placeOrder();
  CheckoutPage.fillPayment();
  CheckoutPage.confirmPayment();
  CheckoutPage.assertOrderSuccess();
});
