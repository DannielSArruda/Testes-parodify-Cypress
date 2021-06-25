/// <reference types="Cypress" />

describe('Login', () => {

    beforeEach(() => {
        cy.visit('http://parodify.herokuapp.com/users/sign_in');
    });

    it('Login with right credentials', () => {
        cy.get('[id=user_email]').type('papito@parodify.com');
        cy.get('[id=user_password]').type('pwd123');
        cy.get('[type=submit]').click();
        cy.get('[rel="nofollow"]').should('be.visible');
    });

    it('Login with wrong credentials', () => {
        cy.get('[id=user_email]').type('papito@parodify.com');
        cy.get('[id=user_password]').type('123456');
        cy.get('[type=submit]').click();
        cy.get('[class="message is-danger"]').should('be.visible');
    });

    it('Login with empty credentials', () => {
        cy.get('[type=submit]').click();
        cy.get('[class="message is-danger"]').should('be.visible');
    });
});