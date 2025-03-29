describe('Visitar a página inicial', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Deve preencher os campos com dados validos', () => {
    cy.get('.r-f4gmv6 > :nth-child(1) > .css-175oi2r').click()
    const data = {
      email: Cypress.env('USER_EMAIL'), // Pegando do env
      password: Cypress.env('USER_PASSWORD'),
      confirmPassword: Cypress.env('USER_PASSWORD')
    }
    cy.fillMandatoryFieldsAndSubmit(data)
   


})
})

