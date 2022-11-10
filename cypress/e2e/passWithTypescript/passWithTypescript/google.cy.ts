/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { Given } from "cypress-cucumber-preprocessor/steps";
import { pass } from "../../../support/pages/passWithTypescript/someFile.cy";
import { localFunctionWithTypes } from "../../../support/pages/passWithTypescript/someFile.cy";



Given('I pass', () => {

  pass("hello world");
  console.log(localFunctionWithTypes(1,2) === 2)
  cy.googleSearch('cypress 10')
});
