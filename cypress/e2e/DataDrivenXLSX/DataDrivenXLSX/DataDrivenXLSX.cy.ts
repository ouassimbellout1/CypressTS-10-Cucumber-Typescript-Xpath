/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import dataDriven from "../../../support/pages/DataDrivenXLSX/page-DataDrivenXLSX.cy";

Given(`J'accede a l'url`, () => {
    cy.visit(`https://react-redux.realworld.io/#/login?_k=g43dop`);
  });

When(`Le fichier excel est pret`, () => {
    dataDriven.excelFileValidate(`login`);
});

Then(`Utiliser XLSX pour se connecter`, () => {
    dataDriven.taskExcel(`login`, `invalid-users`).then(
        (user: any) => {
            let rowsLength = user.length;
            for (let i = 0;  i < rowsLength; i++) {
                cy.get(`[type="email"]`).clear().type(user[i].email);
                cy.get(`[type="password"]`).clear().type(user[i].password);
                cy.get(`.btn`).click();
                cy.get(`.error-messages > li`).then(function(e){
                    const t = e.text();
                    expect(t).to.contains(`email or password is invalid`);
                })
            }
        }
    )
    cy.get('.navbar-brand').click();
});

Then(`Utiliser Json pour se connecter`, () => {  
    dataDriven.taskExcel(`login`, `invalid-users`).then(
        (user: any) => { 
            let rowsLength = user.length;
            dataDriven.excelToJson(user, `login`);
            dataDriven.fixture(`login`).then((data) => {   
                for (let i = 0;  i < rowsLength; i++) {
                    cy.get('[type="email"]').clear().type(data.user[i].email);
                    cy.get('[type="password"]').clear().type(data.user[i].password);
                    cy.get('.btn').click();
                    cy.get('.error-messages > li').then(function(e){
                        const t = e.text();
                        expect(t).to.contains('email or password is invalid');
                    })
                }
            })
        }
    )
    cy.get('.navbar-brand').click();  
});