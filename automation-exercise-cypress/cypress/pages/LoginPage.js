class LoginPage {
  assertLoginPage() {
    cy.url().should("include", "/login");
    cy.contains("h2", "Login to your account").should("be.visible");
    cy.contains("h2", "New User Signup!").should("be.visible");
  }

  login(email, password) {
    cy.get('[data-qa="login-email"]').should("be.visible").clear().type(email);
    cy.get('[data-qa="login-password"]').clear().type(password, { log: false });
    cy.get('[data-qa="login-button"]').click();
  }

  assertInvalidCredentials() {
    cy.contains("p", "Your email or password is incorrect!").should("be.visible");
  }

  signupExistingEmail(name, email) {
    cy.get('[data-qa="signup-name"]').clear().type(name);
    cy.get('[data-qa="signup-email"]').clear().type(email);
    cy.get('[data-qa="signup-button"]').click();
  }

  assertExistingEmailError() {
    cy.contains("p", "Email Address already exist!").should("be.visible");
  }
}

export default new LoginPage();
