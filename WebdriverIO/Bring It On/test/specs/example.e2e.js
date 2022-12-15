describe("Test suite", () => {

    it("First test", async () => {
        await browser.url("https://pastebin.com/");
        await $("//*[@id='postform-text']").setValue("git config --global user.name 'New Sheriff in Town' git reset $ (git commit-tree HEAD ^ {tree} -m 'Legacy code') git push origin master --force")
        await $("span#select2-postform-expiration-container").click()
        await $("//li[text()='10 Minutes']").click() 
        await $("span#select2-postform-format-container").click()
        await $("li#select2-postform-format-result-rx7b-8").click() 
        await $("//*[@id='postform-name']").setValue("how to gain dominance among developers"); 
        await $("//button[text()='Create New Paste']").click();
    
        expect("//a[text()='Bash']").toEqual("Bash") // Syntax is suspended for bash
        await $("//a[text()='download']").click(); // Save paste     

    })
})
// код должен отрабатывать и пару раз это происходило полностью со всеми параметрами и созданием пасты
// проблема возникает в поиске элементов, каждый раз в разных - то не находит одни, то другие
// при этом элементы указаны верно, пробовал всеми видами выделения
// заметил что и на самой странице они периодически меняют значение, но даже с верными значениями все по-прежнему 
// 
// такая же проблема:
// https://automated-testing.info/t/selenium-ne-vidit-elementov-na-stranicze/1577
