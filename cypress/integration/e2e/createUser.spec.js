/// <reference types="cypress" />
import NewAccForm from '../pageObjects/NewAccForm';

describe("Sign Up Tests", () => {
    const createUser = new NewAccForm();

    context('Create User', () => {
        beforeEach(() => {
            cy.visit('https://platform.nexo.io/register')
        })

        it('verify form', () => {
            createUser.user()
                .should('be.visible')
                .should('be.enabled')
    
            createUser.password()
                .should('be.visible')
                .should('be.enabled')
    
            createUser.submit()
                .should('be.visible')
                .should('be.enabled')
        })
    
        it('populate', () => {
            createUser.user().type('dummyUser@mailinator.com')
            createUser.password().type('Test123!')
            // createUser.submit().click()
        })

        it.skip('skip', () => {

        })
    })


})