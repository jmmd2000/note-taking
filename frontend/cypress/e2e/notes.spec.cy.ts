/// <reference types="cypress" />

describe("Notes application", function () {
  it("Visits the homepage", function () {
    cy.visit("http://localhost:5173/");
    cy.get('h3[data-test="heading"]').contains("Welcome Home");
  });
});

describe("Notes list page", function () {
  it("Visits the notes list page and checks there are 3 note card components", function () {
    cy.visit("http://localhost:5173/notes");
    cy.get('button[data-test="submit-button"]').should("exist");
    cy.get('div[data-testid="note-card-grid"]').should("exist");
    cy.get('div[data-testid="note-card-grid"] > a[data-testid="note-card"]').should("have.length", 3);
    cy.get('a[data-testid="note-card"]').each((card) => {
      cy.wrap(card).find("h3").should("exist");
      cy.wrap(card).find("p").should("exist");
    });
  });
});
