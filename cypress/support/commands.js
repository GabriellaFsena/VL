Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {}) => {
    if (data.email) {
        cy.get(':nth-child(1) > .r-uaa2di > .r-rs99b7 > .css-175oi2r > .css-11aywtz').type(data.email);
    }
    if (data.password) {
        cy.get(':nth-child(2) > .r-uaa2di > .r-42olwf > .r-1awozwy > .css-11aywtz').type(data.password);
    }
    if (data.confirmPassword) {
        cy.get(':nth-child(3) > .r-uaa2di > .r-42olwf > .r-1awozwy > .css-11aywtz').type(data.confirmPassword);
    }
});


Cypress.Commands.add('dadosCad', contCad => {
    cy.get(':nth-child(1) > .r-uaa2di > .r-42olwf > .css-175oi2r > .css-11aywtz').type(contCad.name)
    cy.get(':nth-child(2) > .r-uaa2di > .r-42olwf > .css-175oi2r > .css-11aywtz').type(contCad.tel)
    cy.get(':nth-child(3) > .r-uaa2di > .r-42olwf > .r-1awozwy > .css-11aywtz').type(contCad.birthday)
})

Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
      cy.visit('/')
      cy.get(':nth-child(1) > .r-uaa2di > .r-rs99b7 > .css-175oi2r > .css-11aywtz').type(user)
      cy.get(':nth-child(2) > .r-uaa2di > .r-42olwf > .r-1awozwy > .css-11aywtz').type(password)
      cy.get('.r-16y2uox > .r-1t01tom > .css-175oi2r').click()
     
    })
})