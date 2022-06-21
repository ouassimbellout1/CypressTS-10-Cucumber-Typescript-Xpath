const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/reports/cucumber-json",  // ** Path of .json file **//
    reportPath: "cypress/reports",
    openReportInBrowser: false,
    disableLog: true,
    displayDuration: true,
    displayReportTime: true,
    durationInMS: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "102",
        },
        device: "Laptop",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
});