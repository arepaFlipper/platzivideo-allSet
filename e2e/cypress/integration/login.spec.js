'use strict'

describe('Login tests', () => {

  beforeEach(() => {
    cy.fixture('user.json').as('userData')
    cy.visit('/login')
    cy.contains('h1', 'Bienvenido').should('be.visible')
  })

  it('should sign up a user', () => {
    cy.get('@userData').then((userData)=>{
      cy.createUser(userData)
    })
  });

  it('Must fail the sign in with a non-registered-user', () => {
    cy.loginUser('fail@test.com', 'qwerty123')
    cy.get('.error-msg').should('be.visible')
  });

  it('must login a user', () => {
    cy.get('@userData').then((userData)=>{
      cy.loginUser(userData.email, userData.password)
      cy.contains('a', 'Dashboard').should('be.visible')
    });
  });

  after(() => {
    cy.log('All tests done')
  })
})

