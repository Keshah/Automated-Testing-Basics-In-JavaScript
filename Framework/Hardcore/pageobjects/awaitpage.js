const { By} = require('selenium-webdriver')
var BasePage = require('../pageobjects/basepage')
var webdriver = require('selenium-webdriver')

class AwaitPage extends BasePage {
    async await_page(){
        const elem = calculatorurl //driver.findElement(By.css('form[name=ComputeEngineForm]'))
        await elem.waitForDisplayed({timeout:30000})
    }
}

module.exports = new AwaitPage()