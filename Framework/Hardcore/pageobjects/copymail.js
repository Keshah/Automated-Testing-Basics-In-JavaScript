const { By} = require('selenium-webdriver')
var BasePage = require('./basepage')
var webdriver = require('selenium-webdriver')

class CopyMail extends BasePage {
    async copy_mail(){
        var mailgenerator = 'https://10minutemail.com'
        homepage.go_to_url(mailgenerator)
        const copymail = driver.findElement(By.css('input[id=mail_address]'))
        const valueMail = await copymail.getValue()

    }
}

class CheckMail extends BasePage {
    async check_mail(){
        driver.findElement(By.css('div[class="small_message_icon_box"]')).click()
        const checkmail = driver.findElement(By.css('h3[id=geom_inter_1671023310503_44_19]'))
        const checkMailValue = await checkmail.getValue()
}
}
module.exports = new CopyMail()
module.exports = new CheckMail()