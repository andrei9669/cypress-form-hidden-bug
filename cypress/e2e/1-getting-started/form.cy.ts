describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('demos the bug', () => {
    cy.get('[name="0"]').type('123');
    cy.contains('button', /next 0/i).click();
    cy.contains('button', /back 1/i).click();
  });
});
