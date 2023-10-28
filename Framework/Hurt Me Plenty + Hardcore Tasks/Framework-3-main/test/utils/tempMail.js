const axios = require("axios");

class tempMail {
  randomMail;
  message;
  async getEmail() {
    const response = await axios.get('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1')

    let mail = response.data[0].replace("/\[|\]/g", '');

    expect(mail).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    this.randomMail = mail
  }

  async getMailBoxFirstMessage() {
    const response = await axios.get('https://www.1secmail.com/api/v1/?action=readMessage&login=demo&domain=1secmail.com&id=1')
    this.message = response.data.body
  }

}

module.exports = new tempMail();