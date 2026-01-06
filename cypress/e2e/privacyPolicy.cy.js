describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {
    cy.visit('./src/privacy.html')
  })


    it.only('testa a página da política de privacidade de forma independente', () => {
        cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
        cy.contains('p', 'Não salvamos dados submetidos no formulário da aplicação CAC TAT.').should('be.visible')
        cy.contains('p', 'Utilzamos as tecnologias HTML, CSS e JavaScript, para simular uma aplicação real.').should('be.visible')
        cy.contains('p', 'No entanto, a aplicação é um exemplo, sem qualquer persistência de dados, e usada para fins de ensino.').should('be.visible')
        cy.contains('p', 'Talking About Testing').should('be.visible')
    })
    
    Cypress._.times(3, () => {
      it('verifica o tempo de carregamento da página da política de privacidade', () => {
        const start = performance.now()
        cy.visit('./src/privacy.html')
        cy.window().then(() => {
          const end = performance.now()
          const loadTime = end - start
          expect(loadTime).to.be.lessThan(2000) // Verifica se o tempo de carregamento é menor que 2 segundos
        })
      })
    })
    
})

