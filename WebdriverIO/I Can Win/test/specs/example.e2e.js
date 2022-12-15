const {By, Key} = require('selenium-webdriver')

describe("Test suite", () => {
    it("Second test", async () => {
        await $('textarea[id="postform-text"]').setValue("Hello from WebDriver")
        await $('span[id="select2-postform-expiration-container"]').click()
        await $('li[id="select2-postform-expiration-result-b75s-10M"]').click() 
        await $("//*[@id='postform-name']").setValue("helloweb");
        await $("//button[text()='Create New Paste']").click();
    })
})
// код должен отрабатывать и пару раз это происходило полностью со всеми параметрами и созданием пасты
// проблема возникает в поиске элементов, каждый раз в разных - то не находит одни, то другие
// при этом элементы указаны верно, пробовал всеми видами выделения
// заметил что и на самой странице они периодически меняют значение, но даже с верными значениями все по-прежнему 
// 
// такая же проблема:
// https://automated-testing.info/t/selenium-ne-vidit-elementov-na-stranicze/1577