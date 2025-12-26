describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('Teste de preenchimento do campo de texto. ', 20)
    cy.get('input[name="firstName"]')
      .should('be.visible')
      .type('José')

    cy.get('input[name="lastName"]')
      .should('be.visible')
      .type('Pacheco')

    cy.get('input[type="email"]')
      .should('be.visible')
      .type('josepachecocontato159@gmail.com')

    cy.get('textarea[name="open-text-area"]')
      .should('be.visible')
      .type(longText, { delay:0})

    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()

    cy.get('.success')
      .should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    
    cy.get('input[name="firstName"]')
      .should('be.visible')
      .type('José')

    cy.get('input[name="lastName"]')
      .should('be.visible')
      .type('Pacheco')

    cy.get('input[type="email"]')
      .should('be.visible')
      .type('josepachecocontato159@gmail,com')

    cy.get('textarea[name="open-text-area"]')
      .should('be.visible')
      .type('Teste de preenchimento')

    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()

    cy.get('.error')
      .should('be.visible')

    })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {

    cy.get('#phone')
      .type('asd')
      .should('have.value', '')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {

     cy.get('input[name="firstName"]')
      .type('José')

    cy.get('input[name="lastName"]')
      .type('Pacheco')

    cy.get('input[type="email"]')
      .type('josepachecocontato159@gmail,com')

    cy.get('#phone-checkbox')
      .check()
      .should('be.checked')

    cy.get('textarea[name="open-text-area"]')
      .type('Teste de preenchimento')

    cy.get('#phone')
      .should('have.value', '')

    cy.get('button[type="submit"]')
      .click()

    cy.get('.error')
      .should('be.visible')


  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {

    cy.get('input[name="firstName"]')
      .type('José')
      .should('have.value', 'José')
      .clear()
      .should('have.value', '')

    cy.get('input[name="lastName"]')
      .type('Pacheco')
      .should('have.value', 'Pacheco')
      .clear()
      .should('have.value', '')
    cy.get('input[type="email"]')
      .type('teste@gmail.com')
      .should('have.value', 'teste@gmail.com')
      .clear()
      .should('have.value', '')
    cy.get('#phone')
      .type('123456789')
      .should('have.value', '123456789')
      .clear()
      .should('have.value', '')

  })
  
  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () =>{
      cy.get('button[type="submit"]')
        .click()  
      
      cy.get('.error')
        .should('be.visible')
  })

  it('envia o formuário com sucesso usando um comando customizado', () =>{
  //  Const data caso voce queira usar dados personalizados no commands.js. 
  // Basta passar o objeto como parâmetro dentro do fillMandatoryFieldsAndSubmit
    const data = {
      firstName: 'José',
      lastName: 'Pacheco',
      email: 'josepachecocontato159@gmail.com',
      text: Cypress._.repeat('Teste de preenchimento do campo de texto. ', 20)
    }
  // Caso não queira usar dados personalizados, basta chamar o comando sem parâmetros. 
  // O mesmo vai usar os valores definidos como padrão no commands.js caso nenhum parâmetro seja passado.
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success')
      .should('be.visible')

  })

  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')
  
  })

  it('seleciona um produto (Mentoria) por seu valor (value)', () =>{
    cy.get('#product')
      .select('mentoria') 
      .should('have.value', 'mentoria')

  })

  it('seleciona um produto (Blog) por seu índice', () => {
    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')

  })

  it('marca o tipo de atendimento "Feedback"', () => {

    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('be.checked', 'feedback')
      
  })

  it('marca cada tipo de atendimento', () =>{
    cy.get('input[type="radio"]')
      .each(TypeOfService => { //transforma cada elemento em um objeto chamado TypeOfService
        cy.wrap(TypeOfService) //com o cy.wrap conseguimos usar os comandos do cypress dentro do each
          .check() //marca o radio button
          .should('be.checked') //verifica se está marcado
      }
      )
     
  })

  it('marca ambos checkboxes, depois desmarca o último', () =>{
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')

    cy.get('input[type="checkbox"]')
      .last()
      .uncheck()
      .should('not.be.checked')

  })

  it('seleciona um arquivo da pasta fixtures', () => {

    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/example.json')
      .then(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })

  })

  it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
      .then(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture('example.json').as('sampleFile')
    cy.get('input[type="file"]')
      .selectFile('@sampleFile')
      .then(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {

    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href', 'privacy.html')
  })

  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click()    
    
    cy.contains('h1', 'CAC TAT - Política de Privacidade')
      .should('be.visible')
  })


})