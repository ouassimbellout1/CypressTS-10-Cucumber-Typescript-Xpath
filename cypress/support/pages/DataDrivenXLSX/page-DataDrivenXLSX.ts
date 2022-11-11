/// <reference types="cypress" />

const variable = {
    url           : `https://react-redux.realworld.io/#/login?_k=g43dop`,
    excelFileName : `login`,
    sheetName     : `login`,
    jsonFileName  : `login`,
}

class DataDriven {

    navigate() {
        return cy.visit(variable.url);
    }
    
    excelFileValidate() {
        cy.readFile(`cypress/fixtures/xlsx/${variable.excelFileName}.xlsx`);
    }

    taskExcel() {
        const excelFilePath = `cypress/fixtures/xlsx/${variable.excelFileName}.xlsx`;
        const sheetName = variable.sheetName;
        return cy.task("generateJSONFromExcel", { excelFilePath, sheetName })
    }

    excelToJson(user: any) {
        return cy.writeFile(`cypress/fixtures/Json/${variable.jsonFileName}.json`, {user});
    }

    fixture() {
        return cy.fixture(`Json/${variable.jsonFileName}.json`)
    }
}

export default new DataDriven();