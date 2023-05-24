//import '@shelex/cypress-allure-plugin';

/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {

  console.log(config) // see everything in here!

  

  // for mocha report
  module.exports = (on, config) => {
    require('cypress-mochawesome-reporter/plugin')(on);
  };

  // IMPORTANT return the updated config object
  return config
}

//Lauch incognito window

module.exports = (on, config) => {
on("before:browser:launch", (browser, launchOptions) => {
  console.log(launchOptions.args);
  if (browser.name == "chrome") {
    launchOptions.args.push("--incognito");
  }
  return launchOptions;
 });
 };
