const {$} = require("@wdio/globals");

 class tempMailPage {
   randomEmail;
   async clickCopyEmail() {
     this.randomEmail = await $("//input[@placeholder='some_random_name']").getText() + await $("//div[@class='styled-select slate']").innerText
   }
 }

//import { Key } from 'webdriverio'

//it('should copy&paste from one input to another', async () => {
//    const $copyInput = await $("//input[@placeholder='some_random_name']")
//    const $pasteInput = await $("//label[contains(text(),'Email')]/../input")
//
//    // copies text from an input element
//    await $copyInput.setValue('some text')
//    await browser.keys([Key.Ctrl, 'a'])
//    await browser.keys([Key.Ctrl, 'c'])
//
//    // inserts text from clipboard into input element
//    await $pasteInput.click()
//    await browser.keys([Key.Ctrl, 'v'])
//
//    await expect($pasteInput).toHaveValue('some text')
//})
module.exports = new tempMailPage();