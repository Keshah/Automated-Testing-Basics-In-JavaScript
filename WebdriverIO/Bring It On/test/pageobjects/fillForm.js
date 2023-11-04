class computeEngineForm {

    dropDownName;
  
    async fillPaste(value) {
      await $("//*[@id='postform-text']").waitForDisplayed({ timeout: 50000 });
      await $("//*[@id='postform-text']").setValue(value);
      expect ("//*[@id='postform-text']").toHaveValue(value);
    }

    async clickOnDropdownExpiration() {
        const dropDownField = "span#select2-postform-expiration-container";
        await $(dropDownField).waitForDisplayed({ timeout: 5000 });
        await $(dropDownField).scrollIntoView({ block: 'center', inline: 'center' });
        await $(dropDownField).click();
    
        expect($("span#select2-postform-expiration-container")).toBeDisplayed();
      }
  
    async selectDropdownValueExpiration() {

        let xpathToDropdownValue = "//li[contains(., '10 Minutes')]";
    
        await $(xpathToDropdownValue).scrollIntoView({ block: 'center', inline: 'center' });
        await $(xpathToDropdownValue).waitForDisplayed(5000);
        await $(xpathToDropdownValue).click();
    
        expect($("//li[contains(., '10 Minutes')]")).toBeDisplayed();
    }

    async fillPasteTitle(value) {
      await $('//input[@class="form-control"][@id="postform-name"]').waitForDisplayed({ timeout: 50000 });
      await $('//input[@class="form-control"][@id="postform-name"]').setValue(value);
      expect ('//input[@class="form-control"][@id="postform-name"]').toHaveValue(value);
    }

    async clickOnDropdownSyntax() {
      const dropDownField = "span#select2-postform-format-container";
      await $(dropDownField).waitForDisplayed({ timeout: 5000 });
      await $(dropDownField).scrollIntoView({ block: 'center', inline: 'center' });
      await $(dropDownField).click();
  
      expect($("span#select2-postform-format-container")).toBeDisplayed();
    }

  async selectDropdownValueSyntax() {

      let xpathToDropdownValue = "//span/ul/li/ul/li[text() = 'Bash']";
  
      await $(xpathToDropdownValue).scrollIntoView({ block: 'center', inline: 'center' });
      await $(xpathToDropdownValue).waitForDisplayed(5000);
      await $(xpathToDropdownValue).click();

      expect($("//span/ul/li/ul/li[text() = 'Bash']")).toBeDisplayed();
  }

  async clickOnCreateButton() {
    let xpathButton = "//button[contains(., 'Create New Paste')]"
    await $(xpathButton).waitForClickable(5000);
    await $(xpathButton).click();
    await browser.pause(1000)
  }

  }
module.exports = new computeEngineForm();
