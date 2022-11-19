/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { say } from "../../../support/pages/page-googleSearch/page-googleSearch.cy";
import { localFunctionWithTypes } from "../../../support/pages/page-googleSearch/page-googleSearch.cy";

Given(`J'accede à google`, () => {
  cy.visit(`https://www.google.com/`)
})

When(`Google est affiché`, () => {
  cy.url().should('eq', 'https://www.google.com/')
})

Then(`First search`, () => {
  say(`hello world`);
  console.log(localFunctionWithTypes(1,2) === 2);
  cy.googleSearch('cypress 10');
});

Then(`Second search : {string}`, textSearch => {
  say(`hello world`);
  console.log(localFunctionWithTypes(1,2) === 2);
  cy.googleSearch(textSearch);
});