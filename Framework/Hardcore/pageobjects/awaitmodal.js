const {By} = require('selenium-webdriver')
var BasePage = require('../pageobjects/basepage')
var webdriver = require('selenium-webdriver')

class ModalPage extends BasePage {
    async modal_page(){
        const elem = driver.findElement(By.css('md-dialog[aria-label="Email Estiamte"]'))
        await elem.waitForDisplayed({timeout:30000})
    }
}

module.exports = new ModalPage()