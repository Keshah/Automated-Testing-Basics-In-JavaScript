const homepage = require('../pageobjects/homepage')
const inputpage = require('../pageobjects/inputpage')
const awaitpage = require('../pageobjects/awaitpage')
const selectpage = require('../pageobjects/selectpage')
const {By} = require('selenium-webdriver')
var webdriver = require('selenium-webdriver')

describe('This is the describe block', function(){
    this.timeout(50000);
    beforeEach(function(){

    })
    afterEach(function(){

    })

    it('POM Test', async function(){
        //Enter test steps
        var baseurl = 'https://www.google.com/'
        var calculatorurl = 'https://cloud.google.com/products/calculator'
        homepage.go_to_url(baseurl)
        homepage.enter_search('Google Cloud Platform Pricing Calculator')
        homepage.go_to_url(calculatorurl)
        awaitpage.await_page() // полная прогрузки страницы калькулятора 
        inputpage.fill_input('4', '') //ввод двух требуемых полей инпутов
        // fill_input не отрабатывает, так как по какой то причине не может найти инпут элементы, указанные в inputpage.js
        selectpage.fill_select() // заполнение полей выбора
        driver.findElement(By.css('button[aria-label="Add to Estimate"]')).click() // отправить форму
    })
})
