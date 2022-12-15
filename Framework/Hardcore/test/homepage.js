const homepage = require('../pageobjects/homepage')
const inputpage = require('../pageobjects/inputpage')
const awaitpage = require('../pageobjects/awaitpage')
const awaitmodal = require('../pageobjects/awaitmodal')
const selectpage = require('../pageobjects/selectpage')
const {By} = require('selenium-webdriver')
var webdriver = require('selenium-webdriver')
const copymail = require('../pageobjects/copymail')
const input_mailform = require('../pageobjects/input_mailform')

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
        awaitpage.await_page() // полная прогрузка страницы калькулятора 
        inputpage.fill_input('4', '') //ввод всех требуемых полей инпутов
        // fill_input и fill_select не отрабатывают, так как по какой то причине не может найти инпут элементы, указанные в inputpage.js
        selectpage.fill_select() // заполнение полей выбора
        driver.findElement(By.css('button[aria-label="Add to Estimate"]')).click() // отправить форму
        driver.findElement(By.css('button[title="Email Estimate"]')).click()
        awaitmodal.modal_page()
        copymail() // функция открывает сайт генерации почтовых ящиков и записывает значение в переменную valueMail
        input_mailform.enter_mail_input(valueMail)  // вставляем это значение в инпут 
        driver.findElement(By.css('button[aria-label="Send Email"]')).click() // отправить форму
        check_mail()// записывает значение итоговой суммы из письма пришедшего на почту
        // проверяет значение на правильность
    })
})
