describe('google.com', () => {

    context('tests', () => {
        it('open', () => {
            cy.visit('/')
            cy.get('#search-input > #search').type('lubo zhechev')
            cy.get('#search-icon-legacy').click()
            cy.get('#content-section').should('exist')
        })
    })
    
})