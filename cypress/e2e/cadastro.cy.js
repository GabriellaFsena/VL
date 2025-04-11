describe('Cadastro', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Deve preencher os campos com dados validos', () => {
    cy.contains('Começar agora', { timeout: 10000 }).should('be.visible').click()
    const data = {
      email: Cypress.env('USER_EMAIL'), 
      password: Cypress.env('USER_PASSWORD'),
      confirmPassword: Cypress.env('USER_PASSWORD')
    }
    cy.cadastrar(data)

    cy.get(':nth-child(1) > .r-1t01tom > .css-175oi2r').click()

  })

  it('Não deve permitir cadastro com email invalido', () => {
    cy.contains('Começar agora', { timeout: 10000 }).should('be.visible').click()

    const data = {
      email: 'emailinvalido', 
      password: 'Senha1234@',
      confirmPassword: 'Senha1234@'
    }

    cy.cadastrar(data)

    cy.contains('O formato do e-mail está incorreto. Tente novamente assim: exemplo@dominio.com.')
      .should('be.visible')

    cy.get(':nth-child(1) > .r-1t01tom > .css-175oi2r').click()
    

  })

  it('Não deve permitir cadastro com senhas diferentes', () => {
    cy.contains('Começar agora', { timeout: 10000 }).should('be.visible').click()
    const data = {
      email: 'teste@email.com',
      password: 'Senha123@',
      confirmPassword: 'outrasenha123@'
    }
    cy.cadastrar(data)
    cy.get(':nth-child(1) > .r-1t01tom > .css-175oi2r')
      .click()
    cy.contains('Ops! As senhas estão diferentes. Confira e tente novamente!')
      .should('be.visible')
  })
  it('Não deve permitir cadastro com senhas fora do padrão', () => {
    cy.contains('Começar agora', { timeout: 10000 }).should('be.visible').click()
    const data = {
      email: 'teste@email.com',
      password: 'abc',
      confirmPassword: 'abc'
    }

    cy.cadastrar(data)

    cy.validaRegrasSenha({
      maiuscula: false,
      minuscula: true,
      numero: false,
      especial: false,
      minimo8: false
    })
  })
})