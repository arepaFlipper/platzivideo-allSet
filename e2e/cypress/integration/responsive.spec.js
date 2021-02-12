"use strict";

describe("Login tests", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    cy.viewport('iphone-4')
  });

  beforeEach(() => {
    cy.fixture("user.json").as("userData");
    cy.visit("/");
  });

  it('whatever',()=>{
      
  })

})