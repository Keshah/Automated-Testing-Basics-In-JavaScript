const { By} = require('selenium-webdriver')
var BasePage = require('../pageobjects/basepage')
var webdriver = require('selenium-webdriver')

class InputPage extends BasePage{
    fill_input(inputText1, inputText2){
     
        driver.findElement(By.css('input[name=quantity]')).sendKeys(inputText1)
        driver.findElement(By.css('input[name=label]')).sendKeys(inputText2)
    }
}


module.exports = new InputPage()
