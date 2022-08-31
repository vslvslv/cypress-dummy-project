describe('google.com', () => {

    context('tests', () => {
        it('open', () => {
            cy.visit('/')
            cy.get('#search-input > #search').type('lubo zhechev')
        })
    })
    
})