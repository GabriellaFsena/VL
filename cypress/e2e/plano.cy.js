describe('Visitar a página inicial', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('Escolher um plano', () => {
    cy.get('.r-f4gmv6 > :nth-child(2) > .css-175oi2r').click()
    const login = {
        email: Cypress.env('USER_EMAIL'),
        password: Cypress.env('USER_PASSWORD'),
      }
      cy.illMandatoryFieldsAndSubmit(login)
      cy.get('.r-16y2uox > .r-1t01tom > .css-175oi2r').click()
      
      cy.get(':nth-child(2) > .r-ixexl6 > .r-1jnkns4')
    .click()
    cy.get('[style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > [style="padding: 0px;"] > .r-1nx3t8c > .r-150rngu > .r-16y2uox > .r-13awgt0 > .r-1i6wzkk > .css-175oi2r').click()
}) 
})
