describe('Visitar a página inicial', () => {
    beforeEach(() => {
      cy.visit('/')
        cy.get('.r-f4gmv6 > :nth-child(2) > .css-175oi2r').click()
    const login = {
        email: Cypress.env('USER_EMAIL'),
        password: Cypress.env('USER_PASSWORD'),
      }
      cy.illMandatoryFieldsAndSubmit(login)
      cy.get('.r-16y2uox > .r-1t01tom > .css-175oi2r').click()
    })
    it('Completar dados Nutricionais', () => {
     
     
      cy.get(':nth-child(1) > .r-uaa2di > .r-42olwf > .css-175oi2r > .css-11aywtz').type('180') // altura
      cy.get('.r-8d26hk > .r-f4gmv6 > :nth-child(2) > .r-uaa2di > .r-rs99b7 > .css-175oi2r > .css-11aywtz').type('95')  //peso atual
      cy.get('.r-42olwf > .css-175oi2r > .css-11aywtz').type('80') //peso desejado
      cy.get('div[class="css-175oi2r r-1cmwbt1 r-1v1z2uz"]')
      .contains('Atividade leve')
      .click()
      cy.get(':nth-child(4) > .r-1i6wzkk > .css-175oi2r').click()
      
})  
})