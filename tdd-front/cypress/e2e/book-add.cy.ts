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
  it('Should add book with valid name and author', () => {
    cy.visit('/');
    cy.get('[data-test="book-add-name-field"]')
      .should('be.visible')
      .type('Lou');
    cy.get('[data-test="book-add-author-field"]')
      .should('be.visible')
      .type('Julien Neel');
    cy.get('[data-test="book-add-submit-button"]').click();
    cy.get('[data-test="book-add-success-message"]').should("be.visible");
    cy.get('[data-test="refresh-book-list-button"]').click();
    cy.get('tr[data-test="book-list-table-row"]').should('have.length', 4);
  });
  it('Should display error name message', () => {
    cy.visit('/');
    cy.get('[data-test="book-add-author-field"]')
      .should('be.visible')
      .type('Julien Neel');
    cy.get('[data-test="book-add-submit-button"]').click();
    cy.get('[data-test="book-add-error-name-message"]').should("be.visible");
  });
  it('Should display error author message', () => {
    cy.visit('/');
    cy.get('[data-test="book-add-name-field"]')
      .should('be.visible')
      .type('Lou');
    cy.get('[data-test="book-add-submit-button"]').click();
    cy.get('[data-test="book-add-error-author-message"]').should("be.visible");
  });
})
