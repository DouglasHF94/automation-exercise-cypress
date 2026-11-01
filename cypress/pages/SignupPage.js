class SignupPage {
  signup(user) {
    cy.get('[data-qa="signup-name"]').should("be.visible").type(user.name);
    cy.get('[data-qa="signup-email"]').type(user.email);
    cy.get('[data-qa="signup-button"]').click();
    cy.contains("b", "Enter Account Information").should("be.visible");
  }

  fillAccountInformation(user) {
    cy.get("#id_gender1").check({ force: true });
    cy.get('[data-qa="password"]').type(user.password, { log: false });
    cy.get('[data-qa="days"]').select(user.birthDay);
    cy.get('[data-qa="months"]').select(user.birthMonth);
    cy.get('[data-qa="years"]').select(user.birthYear);
    cy.get("#newsletter").check({ force: true });
    cy.get("#optin").check({ force: true });

    cy.get('[data-qa="first_name"]').type(user.firstName);
    cy.get('[data-qa="last_name"]').type(user.lastName);
    cy.get('[data-qa="company"]').type(user.company);
    cy.get('[data-qa="address"]').type(user.address1);
    cy.get('[data-qa="address2"]').type(user.address2);
    cy.get('[data-qa="country"]').select(user.country);
    cy.get('[data-qa="state"]').type(user.state);
    cy.get('[data-qa="city"]').type(user.city);
    cy.get('[data-qa="zipcode"]').type(user.zipcode);
    cy.get('[data-qa="mobile_number"]').type(user.mobile);
    cy.get('[data-qa="create-account"]').click();
  }

  assertAccountCreated() {
    cy.contains("b", "Account Created!").should("be.visible");
  }

  continueAfterCreation() {
    cy.get('[data-qa="continue-button"]').click();
  }
}

export default new SignupPage();
