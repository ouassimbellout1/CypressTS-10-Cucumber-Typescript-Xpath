import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on) {
      return require('./cypress/plugins/index.ts')(on)
    },
    specPattern: '**/*.feature',
    excludeSpecPattern: '**/pages/*,**/common/*',
    supportFile: "cypress/support/e2e.ts",
    fixturesFolder: "cypress/fixtures",
    experimentalSessionAndOrigin: false,
    video: false,
    videoCompression : false,
    chromeWebSecurity: false,
    includeShadowDom: true
  },
})
