Cypress.Commands.add('login', (username, password) => {
  cy.visit('/')

  // Clica no botão "Já tenho uma conta"
  cy.contains('Já tenho uma conta',  { timeout: 10000 })
    .click()

  // Preenche o campo de e-mail
  cy.get('input[placeholder*="email"]')
    .type(username)

  // Preenche o campo de senha
  cy.get('input[type="password"]')
    .first() 
    .should('be.visible')
    .type(password)

  // Clica no botão de login
  cy.contains('div', 'Continuar') 
    .click()

  })

  Cypress.Commands.add('cadastrar', ({email, password, confirmPassword}) => {
    cy.get('input[placeholder*="@"]').should('be.visible').type(email)
    cy.get('input[type="password"][placeholder="**********"]').eq(0).type(password)
    cy.get('input[type="password"][placeholder="**********"]').eq(1).type(confirmPassword)


  }) 
  Cypress.Commands.add('dadosCad', ({ name, tel, birthday }) => {
    cy.get('input[placeholder="Ex.: Maria Silva"]',  { timeout: 10000 }) 
    .should('be.visible')
    .type(name)
    cy.get('input[placeholder="(DDD) + número de telefone"]').type(tel)
    cy.get('input[placeholder="dd/mm/aaaa"]').type(birthday)
  })

  Cypress.Commands.add('validaRegrasSenha', (regras) => {
    const criterios = {
      maiuscula: 'Letras maiúsculas (A-Z)',
      minuscula: 'Letras minúsculas (a-z)',
      numero: 'Números (0-9)',
      especial: 'Caracteres especiais',
      minimo8: '8 caracteres de extensão'
    }
  
    Object.entries(regras).forEach(([chave, esperado]) => {
      const texto = criterios[chave]
  
      cy.contains(texto)
        .parent()
        .find('svg path')
        .should(`${esperado ? '' : 'not.'}have.attr`, 'fill', '#14AE5C')
    })
  })
  
  
  