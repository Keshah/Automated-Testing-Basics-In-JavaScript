const { expect } = require('@wdio/globals')
const fillForm = require('../pageobjects/fillForm')
const CheckValue = require('../pageobjects/CheckValue')

describe("Test suite", () => {

    it("First test", async () => {

        await browser.url("https://pastebin.com/")
        await fillForm.fillPaste("git config --global user.name 'New Sheriff in Town' git reset $ (git commit-tree HEAD ^ {tree} -m 'Legacy code') git push origin master --force");
        await fillForm.clickOnDropdownExpiration();
        await fillForm.selectDropdownValueExpiration();
        await fillForm.clickOnDropdownSyntax();
        await fillForm.selectDropdownValueSyntax();
        await fillForm.fillPasteTitle("how to gain dominance among developers");
        await fillForm.clickOnCreateButton()
        await expect(browser).toHaveTitle("how to gain dominance among developers - Pastebin.com")
        await expect("//a[text()='Bash']").toEqual("//a[text()='Bash']") 
        await browser.pause(2000)
        
    
    })
})