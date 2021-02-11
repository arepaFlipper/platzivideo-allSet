"use strict";

describe("Login tests", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });

  beforeEach(() => {
    cy.fixture("user.json").as("userData");
    cy.visit("/");
  });

  it("should display a forgot password form", () => {
    cy.contains("a", "Olvidé mi contraseña").click();
    cy.contains("h1", "Ingresa tu email").should("be.visible");
    cy.wait(3000);
  });

  it("should sign up a user", () => {
    cy.get("@userData").then((userData) => {
      cy.createUser(userData);
    });
  });

  it("should not sign up, if there are missed data", () => {
    const missData = {
      name: "User tester",
      company: "Company tester",
      email: "user@test.er",
      password: " ",
    };
    cy.createUser(missData);
    cy.loginUser(missData.email, missData.password);
    cy.contains(".main__title", "¿Qué quieres ver hoy?").should(
      "not.be.visible"
    );
  });

  it("should not register the user, if the password is not provided", ()=>{
    const missData = {
      name: "User tester",
      company: "Company tester",
      email: "user@test.er",
      password: " ",
    };
    cy.contains('Regístrate').click()
    cy.get(`[name="name"]`).type(missData.name)
    cy.get(`[name="email"]`).type(missData.email)
    cy.contains('.button', 'Registrarme').click()
    cy.wait(3000)
    cy.contains('h2','Inicia sesión').should('not.exist')
  })

  it("should not register the user, if the name is not provided", ()=>{
    const missData = {
      name: " ",
      company: "Company tester",
      email: "user@test.er",
      password: "qwerty123",
    };
    cy.contains('Regístrate').click()
    cy.get(`[name="email"]`).type(missData.email)
    cy.get(`[name="password"]`).type(missData.password)
    cy.contains('.button', 'Registrarme').click()
    cy.wait(3000)
    cy.contains('h2','Inicia sesión').should('not.exist')
  })

  it("should not register the user, if the email is not provided", ()=>{
    const missData = {
      name: "User tester",
      company: "Company tester",
      email: "user@test.er",
      password: "qwerty123",
    };
    cy.contains('Regístrate').click()
    cy.get(`[name="name"]`).type(missData.name)
    cy.get(`[name="password"]`).type(missData.password)
    cy.contains('.button', 'Registrarme').click()
    cy.wait(3000)
    cy.contains('h2','Inicia sesión').should('not.exist')
  })

  it("Must fail the sign in with a non-registered-user", () => {
    cy.loginUser("fail@test.com", "qwerty123");
    cy.wait(3000);
    cy.contains("h2", "Inicia sesión").should("exist");
  });

  it("must login a user", () => {
    cy.get("@userData").then((userData) => {
      cy.loginUser(userData.email, userData.password);
      cy.contains(".main__title", "¿Qué quieres ver hoy?").should("be.visible");
    });
  });

  it("must logout a user", () => {
    cy.get("@userData").then((userData) => {
      cy.loginUser(userData.email, userData.password);
    });
    cy.visit("/#logout");
    // cy.get('[href="#logout"]').click()
    cy.wait(3000);
    cy.contains(".main__title", "¿Qué quieres ver hoy?").should(
      "not.be.visible"
    );
  });

  it("Must fail the login with the worng password", () => {
    cy.get("@userData").then((userData) => {
      cy.loginUser(userData.email, `${userData.password}#`);
      cy.wait(3000);
      cy.contains(".main__title", "¿Qué quieres ver hoy?").should(
        "not.be.visible"
      );
    });
  });

  after(() => {
    cy.log("All tests done");
  });
});
