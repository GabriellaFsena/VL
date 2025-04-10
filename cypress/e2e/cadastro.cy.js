describe('Visitar a página inicial', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Deve preencher os campos com dados validos', () => {
    cy.contains('Começar agora', { timeout: 10000 }).should('be.visible').click()
    const data = {
      email: Cypress.env('USER_EMAIL'), // Pegando do env
      password: Cypress.env('USER_PASSWORD'),
      confirmPassword: Cypress.env('USER_PASSWORD')
    }
    cy.cadastrar(data)
   
    cy.get(':nth-child(1) > .r-1t01tom > .css-175oi2r').click()

  })


})

