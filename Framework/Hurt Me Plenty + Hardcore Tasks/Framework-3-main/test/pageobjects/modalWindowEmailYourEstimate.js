const {$} = require("@wdio/globals");
const modalWindowEmailYourEstimateLocators = require(
    "../locators/modalWindowEmailYourEstimateLocators");
const tempMail = require("../utils/tempMail");

class modalWindowEmailYourEstimate {

  async fillInputEmail() {
    await tempMail.getEmail()
    await $(modalWindowEmailYourEstimateLocators.inputEmail).waitForDisplayed(
        {timeout: 5000});
    await $(modalWindowEmailYourEstimateLocators.inputEmail).setValue(tempMail.randomMail);

  }

}

module.exports = new modalWindowEmailYourEstimate();