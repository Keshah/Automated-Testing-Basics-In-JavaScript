const { By} = require('selenium-webdriver')
var BasePage = require('../pageobjects/basepage')
const valueMail = require('../pageobjects/copymail')
var webdriver = require('selenium-webdriver')

class MailPage extends BasePage{
    enter_mail_input(){
        driver.findElement(By.css('input[id="input_450"]')).sendKeys(valueMail)
    }
}


module.exports = new MailPage()