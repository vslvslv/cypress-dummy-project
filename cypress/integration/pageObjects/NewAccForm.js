class NewAccForm {
    user() {
        return cy.get('input[type="email"]');
    }

    password() {
        return cy.get('input[type="password"]');
    }

    submit() {
        return cy.get('.flex > .Button')
    }
}

export default NewAccForm;