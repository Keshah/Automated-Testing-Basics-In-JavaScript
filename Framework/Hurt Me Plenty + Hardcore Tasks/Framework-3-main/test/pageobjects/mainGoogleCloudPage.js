class mainGoogleCloudPage {

  get searchInput() {
    return $("[name='q']");
  }

  async setSearchInput(searchValue) {
    await this.searchInput.setValue(searchValue);
  }

  async pressEnter() {
   await browser.keys('Enter');
  }
}

module.exports = new mainGoogleCloudPage();