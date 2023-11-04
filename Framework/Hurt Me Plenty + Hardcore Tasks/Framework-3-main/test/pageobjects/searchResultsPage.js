class searchResultsPage {
  async clickOnGoogleCloudPricingCalculator() {
    await $("a[href='https://cloud.google.com/products/calculator'] b").click();
  }
}

module.exports = new searchResultsPage();