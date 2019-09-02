// https://docs.cypress.io/api/introduction/api.html

import { lookForWordsInModal } from '../support/utils';

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.get('.buttons-div')
      .children()
      .should('have.length', 3);
    cy.get('.textMessage').within(() => {
      cy.get('input')
        .type('Pamela')
        .should('have.value', 'Pamela');
    });
    cy.get('.textMessage').contains('Name must be more than 10 characters');
    cy.get('.textMessage').within(() => {
      cy.get('input')
        .type('Pamela')
        .should('have.value', 'PamelaPamela');
    });
    cy.get('button')
      .contains('Validate')
      .click();
    cy.get('.validate-button').should('have.attr', 'disabled', 'disabled');
    cy.get('.reset-validation-button').click();
    cy.get('.validate-button').should('have.class', 'success');
    cy.get('.reset-form-button').click();
    cy.get('.textMessage').within(() => {
      cy.get('input').should('have.value', '');
    });
    cy.get('.textMessage').within(() => {
      cy.get('input')
        .type('Good Great Awesome')
        .should('have.value', 'Good Great Awesome');
    });
    cy.get('.submission-checkbox [type="checkbox"]')
      .check({ force: true })
      .should('be.checked'); // explain the force true
    cy.get('button')
      .contains('Validate')
      .click();
    lookForWordsInModal([], ['Good', 'Great', 'Awesome']);
    cy.get('.close-button').click();
    cy.get('.textMessage').within(() => {
      cy.get('input')
        .type('Bad Awful Ugly')
        .should('have.value', 'Bad Awful Ugly');
    });
    cy.get('.submission-checkbox [type="checkbox"]')
      .check({ force: true })
      .should('be.checked'); // explain the force true
    cy.get('button')
      .contains('Validate')
      .click();
    lookForWordsInModal(['Bad', 'Awful', 'Ugly'], []);
    cy.get('.close-button').click();
    cy.get('.textMessage').within(() => {
      cy.get('input')
        .type('Bad Great Awesome')
        .should('have.value', 'Bad Great Awesome');
    });
    cy.get('.submission-checkbox [type="checkbox"]')
      .check({ force: true })
      .should('be.checked'); // explain the force true
    cy.get('button')
      .contains('Validate')
      .click();
    lookForWordsInModal(['Bad'], ['Great', 'Awesome']);
    cy.get('.close-button').click();
  });
});
