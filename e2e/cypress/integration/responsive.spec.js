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
    cy.viewport('iphone-4')
    cy.visit("/");
  });

  it('The profile icon is in the viewport',()=>{
    cy.isInViewport(".header__menu--profile")
  })

  it(`the text "Inicia sesión" is in the viewport`,()=>{
    cy.isInViewport(".login__container > h2")
  })

  it(`the username input is in the viewport`,()=>{
    cy.isInViewport(".login__container > h2")
  })

  it(`the password input is in the viewport`,()=>{
    cy.isInViewport(".login__container > h2")
  })

  it(`"Olvidé mi contraseña" is in the viewport`,()=>{
    cy.isInViewport(".login__container--remember-me")
  })

})