describe('Visitar a página inicial', () => {
  const email = Cypress.env('USER_EMAIL')
  const password = Cypress.env('USER_PASSWORD')
  beforeEach(() => {
    cy.visit('/')
  })
  it('Escolher plano', () => {
    cy.login(email, password)

    cy.get('.css-175oi2r.r-1awozwy.r-18u37iz.r-ojf8lh', { timeout: 10000 })
      .eq(1) // Altere o índice para o desejado
      .should('have.text', 'Progresso Moderado')
      .click();
    cy.contains('Salvar informações')
      .should('be.visible')
      .click();

    cy.get('div[style="background-color: rgb(242, 242, 242); display: flex;"]')
      .contains('Continuar cadastro')
      .click();
  })
})