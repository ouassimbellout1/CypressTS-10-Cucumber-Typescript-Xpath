/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { Given } from "cypress-cucumber-preprocessor/steps";
import { pass } from "./someFile.cy";

const localFunctionWithTypes = (a: number, b: number): number => a + b;

Given('I pass', () => {

  pass("hello world");
  console.log(localFunctionWithTypes(1,2) === 2)
  cy.visit('https://www.google.com/')
  cy.xpath("//input[@class='gLFyf gsfi']").type('cypress 10{enter}', { delay : 120 })
});
