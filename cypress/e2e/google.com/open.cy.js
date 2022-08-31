describe('google.com', () => {

    context('tests', () => {
        it('open', () => {
            cy.visit('http://google.bg')
            cy.get('button:Contains("Отхвърляне на всички")').click()
            cy.get('button').should('have.length', 6)
        })
    })
    
})