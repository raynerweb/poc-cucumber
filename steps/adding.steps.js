
//var zombie = require('zombie');
addStepDefinitions(function (scenario) {
//module.exports = function () {
  scenario.Given(/^the input "([^"]*)"$/, function (arg1, callback) {
   // Write code here that turns the phrase above into concrete actions
   callback(null, 'pending');
  });

  scenario.When(/^the calculator is run$/, function (callback) {
   // Write code here that turns the phrase above into concrete actions
   callback(null, 'pending');
  });

  //this.Then(/^the output should be "([^"]*)"$/, function (arg1, callback) {
   // Write code here that turns the phrase above into concrete actions
  // callback(null, 'pending');
  //});
});
