describe('Visitar a página inicial', () => {
  const email = Cypress.env('USER_EMAIL')
  const password = Cypress.env('USER_PASSWORD')

  beforeEach(() => {
    cy.visit('/')
  })

  it('Completar dados Nutricionais', () => {
    cy.login(email, password)

    // Altura
    cy.get('input[placeholder="Ex.: 1,60"]', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type('160')

    // Peso atual
    cy.get('input[placeholder="Ex.: 60 kg"]')
      .should('be.visible')
      .clear()
      .type('55')

    // Peso desejado (segundo input que termina com "kg")
    cy.get('input[placeholder^="Ex.:"][placeholder$="kg"]')
      .eq(1)
      .should('be.visible')
      .clear()
      .type('50')

    cy.get('div.css-175oi2r.r-1cmwbt1.r-1v1z2uz')
      .find('div.css-146c3p1.r-i1xj32.r-k9x4vz.r-ubezar.r-1cwl3u0')
      .contains('Pouca atividade')
      .click();



  })

})
