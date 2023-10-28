const {$} = require("@wdio/globals");

class tempMailPage {
  randomEmail;
  async clickCopyEmail() {
    this.randomEmail = await $("//input[@placeholder='some_random_name']").getText() + await $("//div[@class='styled-select slate']").innerText
  }
}

module.exports = new tempMailPage();