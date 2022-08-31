describe('google.com', () => {

    context('tests', () => {
        before(() => {
            cy.visit('/')
            cy.get('#search-input > #search').type('lubo zhechev')
            cy.get('#search-icon-legacy').click()
        })

        it('valid', () => {
            cy.get('#content-section').should('exist')
        })

        it('fail', () => {
            
            cy.get('#content-section').should('not.exist')
        })
    })
    
})