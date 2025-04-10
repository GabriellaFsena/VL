describe('Visitar a página inicial', () => {
  const email = Cypress.env('USER_EMAIL')
  const password = Cypress.env('USER_PASSWORD')

  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve completar o cadastro com dados válidos', () => {
    cy.login(email, password)

    cy.contains('Continuar').click()
    
    const contCad = {
      name: 'Jana',
      tel: '(99) 99999-9999',
      birthday: '23/09/1998'
    }
    cy.dadosCad(contCad)

    cy.contains('div[tabindex="0"]', 'Feminino').click()

    // Clica para continuar ou finalizar
    cy.get('.r-1t01tom > .css-175oi2r').click()
  })
})
