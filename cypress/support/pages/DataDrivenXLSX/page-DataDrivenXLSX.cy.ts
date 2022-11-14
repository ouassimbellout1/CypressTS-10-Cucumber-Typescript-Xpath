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
}

export default new DataDriven();