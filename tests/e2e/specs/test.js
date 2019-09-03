// https://docs.cypress.io/api/introduction/api.html

import { lookForWordsInModal } from '../support/utils';

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
  });
  it('Should make sure the validate reset form and reset validation buttons are displayed', () => {
    cy.get('.buttons-div')
      .children()
      .should('have.length', 3);
  });
  it('should add a message to the input', () => {
    cy.get('.textMessage').within(() => {
      cy.get('input')
        .type('Pamela')
        .should('have.value', 'Pamela');
    });
  });
  it('should display message that message must be more that 10 Characters', () => {
    cy.get('.textMessage').contains('Name must be more than 10 characters');
  });
  it('SHould add a value to the input and try to submit w/o checking checkbox', () => {
    cy.get('.textMessage').within(() => {
      cy.get('input')
        .type('Pamela')
        .should('have.value', 'PamelaPamela');
    });
    cy.get('button')
      .contains('Validate')
      .click();
    cy.get('.validate-button').should('have.attr', 'disabled', 'disabled');
  });
  it('Should reset validation and validate button should not be disabled', () => {
    cy.get('.reset-validation-button').click();
    cy.get('.validate-button').should('have.class', 'success');
  });
  it('Should reset the form to have no values', () => {
    cy.get('.reset-form-button').click();
    cy.get('.textMessage').within(() => {
      cy.get('input').should('have.value', '');
    });
  });
  it('Should get the sentiment of an all positive message', () => {
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
  });
  it('Should validate that the modal has properly parsed positive and negative words', () => {
    lookForWordsInModal([], ['Good', 'Great', 'Awesome']);
    cy.get('.close-button').click();
  });
  it('Should get the sentiment of an all negative phrase', () => {
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
  });
  it('Should validate that the modal has properly parsed positive and negative words', () => {
    lookForWordsInModal(['Bad', 'Awful', 'Ugly'], []);
    cy.get('.close-button').click();
  });
  it('Should add a message with both positive and negative words and submit for analysis', () => {
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
  });
  it('Should validate that the modal has properly parsed positive and negative words', () => {
    lookForWordsInModal(['Bad'], ['Great', 'Awesome']);
    cy.get('.close-button').click();
  });
});
