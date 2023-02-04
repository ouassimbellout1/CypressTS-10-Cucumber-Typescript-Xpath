/// <reference types="cypress" />

class DataDriven {
    
    excelFileValidate(excelFileName: string) {
        cy.readFile(`cypress/fixtures/xlsx/${excelFileName}.xlsx`);
    }

    taskExcel(excelFileName: string, sheetName: string) {
        const excelFilePath = `cypress/fixtures/xlsx/${excelFileName}.xlsx`;
        return cy.task("generateJSONFromExcel", { excelFilePath, sheetName })
    }

    excelToJson(user: any, jsonFileName: string) {
        return cy.writeFile(`cypress/fixtures/Json/${jsonFileName}.json`, {user});
    }

    fixture(jsonFileName: string) {
        return cy.fixture(`Json/${jsonFileName}.json`)
    }

    logimByEmail(Email: any, Password: any) {
        cy.get('[type="email"]').clear().type(Email);
        cy.get('[type="password"]').clear().type(Password);
        cy.get('.btn').click();
        cy.get('.error-messages > li').then(function(e){
            const t = e.text();
            expect(t).to.contains('email or password is invalid');
        })
    }
}

export default new DataDriven();