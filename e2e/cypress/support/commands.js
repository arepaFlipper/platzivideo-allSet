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