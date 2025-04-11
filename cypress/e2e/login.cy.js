describe('Página de Login', () => {
  const username = Cypress.env('USER_EMAIL')
  const password = Cypress.env('USER_PASSWORD')

  it('Deve realizar login com sucesso', () => {
    cy.login(username, password)

  })
  it('Deve exibir erro ao tentar logar com credenciais inválidas', () => {
    const emailInvalido = 'falso@email.com'
    const senhaErrada = '12345678'
  
    cy.login(emailInvalido, senhaErrada)
  
    cy.contains('Ops! Parece que o e-mail ou a senha estão incorretos. Confira os dados e tente novamente.') 
      .should('be.visible')
  })
  
})

