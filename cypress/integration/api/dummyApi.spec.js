describe('API Tests examples', ()=> {

    context('API', () => {
        it('Check status code', () => {
            Cypress.config('baseUrl', 'https://platform.nexo.io')

            cy.request({
                method: 'Get',
                url: '/register',
                failOnStatusCode: false
            })
            .then((response) => {
                expect(response).to.have.property('status', 200)
                expect(response.body).to.not.be.null
            })
        })

        it('Verify Simple Content', () => {
            Cypress.config('baseUrl', 'https://nexo.io')

            cy.request({
                method: 'Get',
                url: '/about-us',
                failOnStatusCode: false
            })
            .then((response) => {
                expect(response).to.have.property('status', 200)
                expect(response.body).to.not.be.null
                expect(response.body).to.include('Nexo is the world’s largest and most trusted lending institution in the blockchain space. Disrupting the financial system, one bit at a time.')
            })
        })
    })
})