describe('Visitar a página inicial', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('Deve completar o cadastro com dados válidos', () => {
        cy.get('.r-f4gmv6 > :nth-child(2) > .css-175oi2r').click() //botao ja tenho uma conta
        const login = {
            email: Cypress.env('USER_EMAIL'),
            password: Cypress.env('USER_PASSWORD'),
          }
          
          cy.illMandatoryFieldsAndSubmit(login) //logar
          cy.get('.r-16y2uox > .r-1t01tom > .css-175oi2r').click()
        const contCad = {
            name: 'Matheus',
            tel: '(99) 99999-9999.' ,
            birthday: '13/03/2000'
        }
        cy.dadosCad(contCad)
        cy.get('div[class="css-175oi2r r-k200y r-18u37iz r-1tgfunj"]')
        .contains('Masculino')
        .click()
        cy.get('.r-1t01tom > .css-175oi2r').click()

        })

    })
