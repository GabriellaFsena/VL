describe('Visitar a página inicial', () => {
    beforeEach(() => {
      cy.visit('/')
    })
it('Login', () => {
    cy.get('.r-f4gmv6 > :nth-child(2) > .css-175oi2r').click()
    const login = {
        email: Cypress.env('USER_EMAIL'),
        password: Cypress.env('USER_PASSWORD'),
      }
      
      cy.fillMandatoryFieldsAndSubmit(login)
      cy.get('.r-16y2uox > .r-1t01tom > .css-175oi2r').click()
})

})