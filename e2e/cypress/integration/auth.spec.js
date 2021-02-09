'use strict'

describe('Login tests', () => {
  before(()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  })

  beforeEach(() => {
    cy.fixture('user.json').as('userData')
    cy.visit('/')
  })

  it('should sign up a user', () => {
    cy.get('@userData').then((userData)=>{
      cy.createUser(userData)
    })
  });

  it('Must fail the sign in with a non-registered-user', () => {
    cy.loginUser('fail@test.com', 'qwerty123')
    cy.wait(3000)
    cy.contains('h2','Inicia sesión').should('exist')
  });

  it('must login a user', () => {
    cy.get('@userData').then((userData)=>{
      cy.loginUser(userData.email, userData.password)
      cy.contains('.main__title', '¿Qué quieres ver hoy?').should('be.visible')
    });
  });

  it('must logout a user', () => {
    cy.get('@userData').then((userData)=>{
      cy.loginUser(userData.email, userData.password)
    });
    cy.visit('/#logout')
    // cy.get('[href="#logout"]').click()
    cy.wait(3000)
    cy.contains('.main__title', '¿Qué quieres ver hoy?').should('not.be.visible')
  });

  after(() => {
    cy.log('All tests done')
  })
})

