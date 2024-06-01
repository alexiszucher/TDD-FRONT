// https://on.cypress.io/api

describe('Book Add Test', () => {
  it('Author field should be visible', () => {
    cy.visit('/');
    cy.get('[data-test="book-add-author-field"]').should("be.visible");
  });
  it('Name field should be visible', () => {
    cy.visit('/');
    cy.get('[data-test="book-add-name-field"]').should("be.visible");
  });
  it('Submit Button should be visible', () => {
    cy.visit('/');
    cy.get('[data-test="book-add-submit-button"]').should("be.visible");
  });
})
