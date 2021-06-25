/// <reference types="Cypress" />


describe('Register', () => {

    beforeEach(() => {
        cy.visit('http://parodify.herokuapp.com/users/sign_in');
        cy.get('[href="/users/sign_up"]').click();
    });

    it('Register with right informations', () => {

        cy.get('[value="Cadastrar"]').should('be.visible');

        cy.get('[id=user_email]').type('daniell@parodify.com');
        cy.get('[id=user_password]').type('pwd123');
        cy.get('[id="user_password_confirmation"]').type('pwd123');


        
        cy.get('[type=submit]').click();

        cy.get('[rel="nofollow"]').should('be.visible');
    });

    it('Register with different password', () => {

        cy.get('[value="Cadastrar"]').should('be.visible');

        cy.get('[id=user_email]').type('daniele@parodify.com');
        cy.get('[id=user_password]').type('12345678');
        cy.get('[id="user_password_confirmation"]').type('87654321');


        
        cy.get('[type=submit]').click();

        cy.get('[class="message-body"]').should('be.visible');
    });
});