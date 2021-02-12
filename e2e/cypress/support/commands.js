// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('createUser', (userData) => {
    cy.contains('Regístrate').click()
    cy.get(`[name="name"]`).type(userData.name || "")
    cy.get(`[name="email"]`).type(userData.email || "")
    cy.get(`[name="password"]`).type(userData.password || " ")
    cy.contains('.button', 'Registrarme').click()
    cy.wait(3000)
    cy.contains('h2','Inicia sesión').should('exist')
})

Cypress.Commands.add('loginUser', (username, password) => {
    cy.get('[name="email"]').type(username)
    cy.get('[name="password"]').type(password)
    cy.contains('.button', 'Iniciar sesión').click()
    cy.wait(3000)
})

Cypress.Commands.add('topIsWithinViewport', { prevSubject: true }, subject => {
    const windowInnerWidth = Cypress.config(`viewportWidth`);
  
    const bounding = subject[0].getBoundingClientRect();
  
    const rightBoundOfWindow = windowInnerWidth;
  
    expect(bounding.top).to.be.at.least(0);
    expect(bounding.left).to.be.at.least(0);
    expect(bounding.right).to.be.lessThan(rightBoundOfWindow);
  
    return subject;
  })
  
  Cypress.Commands.add('isWithinViewport', { prevSubject: true }, subject => {
    const windowInnerWidth = Cypress.config(`viewportWidth`);
    const windowInnerHeight = Cypress.config(`viewportHeight`);
  
    const bounding = subject[0].getBoundingClientRect();
  
    const rightBoundOfWindow = windowInnerWidth;
    const bottomBoundOfWindow = windowInnerHeight;
  
    expect(bounding.top).to.be.at.least(0);
    expect(bounding.left).to.be.at.least(0);
    expect(bounding.right).to.be.lessThan(rightBoundOfWindow);
    expect(bounding.bottom).to.be.lessThan(bottomBoundOfWindow);
  
    return subject;
  })