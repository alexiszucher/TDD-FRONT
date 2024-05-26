// https://on.cypress.io/api

describe('Book List Test', () => {
  it('title should be visible', () => {
    cy.visit('/');
    cy.get('[data-test="book-list-title"]').should("be.visible");
  }),
  it('table should be visible', () => {
    cy.visit('/');
    cy.get('[data-test="book-list-table"]').should("be.visible");
  }),
  it('2 columns of table should be visible', () => {
    cy.visit('/');
    cy.get('[data-test="book-list-table-author-column"]').should("be.visible");
    cy.get('[data-test="book-list-table-name-column"]').should("be.visible");
  }),
  it('3 books data should be visible', () => {
    cy.visit('/');
    cy.get('tr[data-test="book-list-table-row"]').should('have.length', 3);
  })
})
