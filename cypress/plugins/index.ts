/**
 * @type {Cypress.PluginConfig}
 */

const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");
const resolve = require('resolve');
const xlsx = require('xlsx');

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