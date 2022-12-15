const {By, Key, Builder, Select} = require('selenium-webdriver')

async function example(){
    let driver = await new Builder().forBrowser("chrome").build()
    await driver.get("https://pastebin.com/")
    await driver.findElement(By.css('textarea[id="postform-text"]')).sendKeys('Hello from WebDriver')
    driver.findElement(By.css('#select2-postform-expiration-container > option[value="10M"]')).click();
    //const select = Select(driver.findElement(By.css('id[id="select2-postform-expiration-results"]')))
    //select.Select(driver.findElement(By.css('li[id="select2-postform-expiration-result-b75s-10M"]')))
   // await driver.findElement(By.css('li[id="select2-postform-expiration-result-b75s-10M"]')).click()
}

example()

//  var webdriver = require('selenium-webdriver')
//  //var basepage = require('../page/basepage')
//  var driver = new webdriver.Builder().forBrowser('chrome').build();
//  driver.manage().setTimeouts({implicit: (10000)})
//  const {By, Key} = require('selenium-webdriver')
//  
//  
//  describe('This is the describe block', function(){
//      it("First test", async () => {
//          await browser.url("https://pastebin.com/")
//          const PageTitle = await browser.getTitle()
//  
//          expect(PageTitle).toEqual("Pastebin.com - #1 paste tool since 2002!")
//  
//      })
//      it('Second Test', async function(){
//          driver.findElement(By.css('textarea[id="postform-text"]')).sendKeys('Hello from WebDriver')
//      })
//  })
