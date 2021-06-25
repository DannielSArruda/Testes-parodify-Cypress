/// <reference types="Cypress" />

describe('Player', () => {

    beforeEach(() => {
        cy.visit('http://parodify.herokuapp.com/users/sign_in');
        cy.get('[id=user_email]').type('papito@parodify.com');
        cy.get('[id=user_password]').type('pwd123');
        cy.get('[type=submit]').click();
        cy.get('[rel="nofollow"]').should('be.visible');
        cy.get('[class="fa fa-search fa-lg"]').click();
    });

    it('Play a rock song', () => {
        cy.get('[src*=rock]').click();
        cy.get('[href*="/albums/1"]').click();
        cy.get('[id=play-all]').should('be.visible');
        cy.get('[data-song*="sprints-de-luta"]').click();
        cy.get('[class*="playing"]').should('be.visible');

    });

    it('Play a funk song', () => {
        cy.get('[src*=funk]').click();
        cy.get('[href*="/albums/7"]').click();
        cy.get('[id=play-all]').should('be.visible');
        cy.get('[data-song*="bailedetabela"]').click();
        cy.get('[class*="playing"]').should('be.visible');
    });

    it('Play a rap song', () => {
        cy.get('[src*=rap]').click();
        cy.get('[href*="/albums/6"]').click();
        cy.get('[id=play-all]').should('be.visible');
        cy.get('[data-song*="java-life"]').click();
        cy.get('[class*="playing"]').should('be.visible');

    });

    it('Play a country song', () => {
        cy.get('[src*=sertanejo]').click();
        cy.get('[href*="/albums/5"]').click();
        cy.get('[id=play-all]').should('be.visible');
        cy.get('[data-song*="bugdemanha"]').click();
        cy.get('[class*="playing"]').should('be.visible');

    });
});