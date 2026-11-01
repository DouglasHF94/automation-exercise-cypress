import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

describe("Automation Exercise | Autenticação", () => {
  let user;
  let userData;

  beforeEach(() => {
    cy.fixture("user").then((data) => {
      userData = data;
      user = {
        ...data,
        email: `cypress.${Date.now()}.${Cypress._.random(1000, 9999)}@example.com`
      };
    });
  });

  it("TC01 - deve registrar um novo usuário e excluir a conta", () => {
    cy.visitHome();
    cy.createAccount(user);
    cy.deleteCurrentAccount();
  });

  it("TC02 - deve permitir login com e-mail e senha válidos", () => {
    cy.visitHome();
    cy.createAccount(user);
    HomePage.logout();
    cy.loginWith(user.email, user.password);
    HomePage.assertLoggedInAs(user.name);
    cy.deleteCurrentAccount();
  });

  it("TC03 - deve impedir login com credenciais inválidas", () => {
    cy.visitHome();
    cy.openLogin();
    LoginPage.login("email.inexistente@example.com", "SenhaIncorreta123");
    LoginPage.assertInvalidCredentials();
  });

  it("TC04 - deve encerrar a sessão ao fazer logout", () => {
    cy.visitHome();
    cy.createAccount(user);
    HomePage.logout();
    cy.url().should("include", "/login");
    LoginPage.assertLoginPage();
    cy.loginWith(user.email, user.password);
    cy.deleteCurrentAccount();
  });

  it("TC05 - deve exibir erro ao tentar cadastrar e-mail já existente", () => {
    cy.visitHome();
    cy.createAccount(user);
    HomePage.logout();
    cy.openLogin();
    LoginPage.signupExistingEmail(user.name, user.email);
    LoginPage.assertExistingEmailError();
    cy.loginWith(user.email, user.password);
    HomePage.assertLoggedInAs(user.name);
    cy.deleteCurrentAccount();
  });
});
