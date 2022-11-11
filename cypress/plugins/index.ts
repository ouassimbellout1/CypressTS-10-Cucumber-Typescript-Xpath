/**
 * @type {Cypress.PluginConfig}
 */

const cucumber = require("cypress-cucumber-preprocessor").default;
import browserify from "@cypress/browserify-preprocessor";
import xlsx from 'xlsx';

module.exports = (on: any) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: require.resolve("typescript"),
  };
  on("file:preprocessor", cucumber(options));
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  
  on("task", {
    generateJSONFromExcel: generateJSONFromExcel,
  });
};

// Excel To JSON
function generateJSONFromExcel(agrs) {
  const wb = xlsx.readFile(agrs.excelFilePath, { dateNF: "mm/dd/yyyy" });
  const ws = wb.Sheets[agrs.sheetName];
  return xlsx.utils.sheet_to_json(ws, { raw: false });
}