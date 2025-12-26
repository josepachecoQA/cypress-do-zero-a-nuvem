Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Francisco',
    lastName: 'Freire',
    email: 'francisco@gmail.com',
    textArea: 'Teste de preenchimento do campo de texto.'
}) => {
  const longText = Cypress._.repeat('Teste de preenchimento do campo de texto. ', 20)
    cy.get('input[name="firstName"]')
      .should('be.visible')
      .type(data.firstName)
    cy.get('input[name="lastName"]')
      .should('be.visible')
      .type(data.lastName)

    cy.get('input[type="email"]')
      .should('be.visible')
      .type(data.email)
    
    cy.get('textarea[name="open-text-area"]')
      .should('be.visible')
      .type(data.textArea || longText, { delay:0})

    cy.contains('button', 'Enviar')
      .should('be.visible')
      .click() 
    
    cy.get('.success')
      .should('be.visible')  
})
