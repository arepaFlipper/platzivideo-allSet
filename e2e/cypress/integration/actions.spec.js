describe("Action tests", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });

    cy.visit("/");
    cy.fixture("user.json").as("userData");
    cy.get("@userData").then((userData) => {
      cy.loginUser(userData.email, userData.password);
      cy.contains(".main__title", "¿Qué quieres ver hoy?").should("be.visible");
    });
  });

  it("should add a favorite", () => {
    cy.get(".carousel-item").eq(0).trigger("mouseover");
    cy.get(`[alt="Reproducir"]`).eq(0).click();
    cy.contains("h3", "Mi lista").should("exist");
  });

  it("should delete a favorite", () => {
    cy.get(".carousel-item").eq(0).trigger("mouseover");
    cy.get(`[alt="Quitar de mi lista"]`).eq(0).click();
    cy.contains("h3", "Mi lista").should("not.exist");
  });

  it("should play the movie", () => {
    cy.get('.carousel-item').eq(0).trigger('mouseover');
    cy.get(`[alt="Play Icon"]`).eq(0).click();
    cy.wait(3000)
    cy.url().should('include','/player/')
});
});
