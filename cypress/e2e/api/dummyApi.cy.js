describe('API Tests examples', ()=> {

    context('API', () => {
        
        it.skip('Get request', () => {
            cy.request({
                method: 'Get',
                url: 'https://reqbin.com/echo/get/json'
            }).its('status').should('eq', 200)
        })

    })
})