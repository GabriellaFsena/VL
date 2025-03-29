describe('Visitar a página inicial', () => {
  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/');

    const login = {
      email: Cypress.env('USER_EMAIL'),
      password: Cypress.env('USER_PASSWORD'),
    };

    cy.fillMandatoryFieldsAndSubmit(login);

    // Botão continuar após login
    cy.get('.r-16y2uox > .r-1t01tom > .css-175oi2r')
      .should('be.visible')
      .click();

    // Aguarda o carregamento e salva o token
    cy.window().then((win) => {
      const token = win.localStorage.getItem('authToken'); // Exemplo de chave usada no localStorage
      if (token) {
        Cypress.env('AUTH_TOKEN', token);
      }
    });
  });

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();

    // Restaurar o token antes de cada teste
    cy.window().then((win) => {
      win.localStorage.setItem('authToken', Cypress.env('AUTH_TOKEN'));
    });

    cy.visit('/');
  });

  it('Alterar meta pela home', () => {
    cy.tick(500);

    // Clicar no "Alterar"
    cy.get(':nth-child(1) > .r-1i6wzkk > .css-146c3p1')
      .should('be.visible')
      .click();

    cy.tick(500);

    // Botão "Meta"
    cy.get('.r-f4gmv6 > :nth-child(1) > .css-175oi2r > .css-146c3p1')
      .should('be.visible')
      .click();

    cy.tick(1000);

    // Alterar plano
    cy.contains('Atividade ')
      .should('be.visible')
      .click();

    cy.tick(500);

    // Continuar cadastro
    cy.contains('Continuar cadastro')
      .should('be.visible')
      .click();

    cy.tick(1000);

    // Alterar progresso
    cy.contains('Progresso Acelerado')
      .should('be.visible')
      .click();

    cy.tick(500);

    // Salvar informações
    cy.contains('Salvar informações')
      .should('be.visible')
      .click();

    cy.tick(2000);

    // Validação final
    cy.get('.r-13awgt0.r-ipm5af > .r-13awgt0 > .r-1awozwy > .css-146c3p1')
      .should('be.visible')
      .and('have.text', 'Suas informações foram atualizadas com sucesso!');
  });

  it('Outra validação...', () => {
    // Adicione mais testes sem precisar logar novamente
  });
});
