const {$} = require('@wdio/globals');
const computeEngineFormLocators = require('../locators/computeEngineFormLocators')

class computeEngineForm {

  dropDownName;

  async fillInputNumberOfInstances(value) {
    await $(computeEngineFormLocators.inputNumberOfInstances).waitForDisplayed({ timeout: 5000 });
    await $(computeEngineFormLocators.inputNumberOfInstances).setValue(value);
    expect(computeEngineFormLocators.inputNumberOfInstances).toHaveValue(value);
  }

  async fillInputRegion(value) {
    const inputField = "(//input[@region-input])[3]";
    await $(inputField).waitForDisplayed({ timeout: 5000 });
    await $(inputField).setValue(value);
    expect(inputField).toHaveValue(value);
  }

  async selectDropdownValueRegion(name) {

    let xpathToDropdownValue = "(//md-option//div[normalize-space(text())='" + name + "'])[3]";

    await $(xpathToDropdownValue).scrollIntoView({ block: 'center', inline: 'center' });
    await $(xpathToDropdownValue).waitForDisplayed(5000);
    await $(xpathToDropdownValue).click();

    expect($("//md-select-value[contains(.,'" + name + "')]")).toBeDisplayed();

  }

  async selectDropdownValueCommittedUsage(name) {
 
    let xpathToDropdownValue = "(//md-option//div[normalize-space(text())='" + name + "'])[2]";

    await $(xpathToDropdownValue).scrollIntoView({ block: 'center', inline: 'center' });
    await $(xpathToDropdownValue).waitForDisplayed(5000);
    await $(xpathToDropdownValue).click();


    expect($("//md-select-value[contains(.,'" + name + "')]")).toBeDisplayed();

  }

  async clickOnDropdown(name) {
    const dropDownField = "//label[contains(text(),'" + name + "')]/../md-select";
    await $(dropDownField).waitForDisplayed({ timeout: 5000 });
    await $(dropDownField).scrollIntoView({ block: 'center', inline: 'center' });
    await $(dropDownField).click();

    expect($(".md-select-menu-container[aria-hidden=false]")).toBeDisplayed();
  }

  async selectDropdownValue(name) {
    // init to use in method selectCheckbox(name) for 'expect'
    this.dropDownName = name;

    // let xpathToDropdownValue = "//md-option//div[contains(., '" + name + "')]";
    let xpathToDropdownValue = "//md-option//div[normalize-space(text())='" + name + "']";

    await $(xpathToDropdownValue).scrollIntoView({ block: 'center', inline: 'center' });
    await $(xpathToDropdownValue).waitForDisplayed(5000);
    await $(xpathToDropdownValue).click();

    //check selected value from dropdown
    expect($("//md-select-value[contains(.,'" + name + "')]")).toBeDisplayed();

  }

  async selectCheckbox(name) {
    let xpathToSelectCheckbox = "//md-checkbox[contains(@aria-label, '" + name +"')]";

    await $(xpathToSelectCheckbox).waitForDisplayed(5000);
    await $(xpathToSelectCheckbox).click();
    expect($(xpathToSelectCheckbox)).toBeSelected();

    //check selected value from dropdown
    // expect($("//md-select[contains(@aria-label, '" + this.dropDownName + "')]//md-select-value[contains(.,'" + name + "')]")).toBeDisplayed();
  }

  async clickOnAddToEstimate() {
    let xpathButton = "//button[contains(., 'Add to Estimate')]"

    await $(xpathButton).scrollIntoView({ block: 'center', inline: 'center' });
    await $(xpathButton).waitForClickable();
    await $(xpathButton).click();
  }

  async clickOnEmailEstimate() {
    let xpathButton = "//button[contains(., 'email')]"

    await $(xpathButton).scrollIntoView({ block: 'center', inline: 'center' });
    await $(xpathButton).waitForClickable();
    await $(xpathButton).click();
  }

}

module.exports = new computeEngineForm();