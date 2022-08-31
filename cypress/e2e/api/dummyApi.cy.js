describe('API Tests examples', ()=> {

    context('API', () => {
        
        it('Get request', () => {
            cy.request({
                method: 'Get',
                url: 'https://reqbin.com/echo/get/json'
            }).its('status').should('eq', 200)
        })

    })
})