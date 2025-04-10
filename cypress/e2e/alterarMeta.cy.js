describe('Visitar a página inicial', () => {
  const email = Cypress.env('USER_EMAIL')
  const password = Cypress.env('USER_PASSWORD')

  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve alterar a meta', () => {
    cy.login(email, password)
    cy.get('.css-146c3p1.r-ais2e1.r-1yb1dlw.r-1b43r93.r-1f529hi.r-1ez4vuq', { timeout: 10000 })
      .should('have.text', 'Alterar')
      .click();

    cy.contains('Meta')
      .should('be.visible')
      .click();

    cy.contains('div', 'Qual é o seu nível de atividade física diária?') 
      .parent() 
      .contains('div', 'Atividade moderada') 
      .click();

    cy.get('div[style="background-color: rgb(242, 242, 242); display: flex;"]')
      .contains('Continuar cadastro')
      .click();

    cy.get('.css-175oi2r.r-1awozwy.r-18u37iz.r-ojf8lh', { timeout: 10000 })
      .eq(1) // Altere o índice para o desejado
      .should('have.text', 'Progresso Moderado')
      .click();
    cy.contains('Salvar informações')
      .should('be.visible')
      .click();
  })
});
