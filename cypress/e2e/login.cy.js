describe('Página de Login', () => {
  const username = Cypress.env('USER_EMAIL')
  const password = Cypress.env('USER_PASSWORD')

  it('Deve realizar login com sucesso', () => {
    cy.login(username, password)

  })
})
