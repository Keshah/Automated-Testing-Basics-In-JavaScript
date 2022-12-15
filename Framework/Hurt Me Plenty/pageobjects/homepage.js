const {By, Key} = require('selenium-webdriver')
var BasePage = require('../pageobjects/basepage')
var webdriver = require('selenium-webdriver')

class HomePage extends BasePage{
    enter_search(searchText){
        driver.findElement(By.css('input[name=q]')).sendKeys(searchText)
        driver.findElement(By.css('input[name=q]')).sendKeys(Key.ENTER)

    }
}

module.exports = new HomePage()
