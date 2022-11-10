/// <reference types="cypress" />

const variable = {
    url : "https://react-redux.realworld.io/#/login?_k=g43dop",
    excelFileName : "login.xlsx",
    sheetName : "login",
    jsonFileName : "login.json",
}

class DataDriven {

    navigate() {
        return cy.visit(variable.url);
    }
    
    excelFileValidate() {
        cy.readFile(`cypress/fixtures/xlsx/${variable.excelFileName}`).should('exist')
    }

    taskExcel() {
        const excelFilePath = `cypress/fixtures/xlsx/${variable.excelFileName}`;
        const sheetName = variable.sheetName;
        return cy.task("generateJSONFromExcel", { excelFilePath, sheetName })
    }

    excelToJson(user) {
        return cy.writeFile(`cypress/fixtures/Json/${variable.jsonFileName}`, {user});
    }

    fixture() {
        return cy.fixture(`Json/${variable.jsonFileName}`)
    }
}

export default new DataDriven();