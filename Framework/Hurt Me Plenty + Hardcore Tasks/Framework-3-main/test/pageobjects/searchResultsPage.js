class searchResultsPage {
  // такой метод можно переиспользовать
  // или можно сделать не таким параметризованным и юзать этот селектор a[href='https://cloud.google.com/products/calculator']
  // без параметров в методе
  async clickOnGoogleCloudPricingCalculator() {
    await $("a[href='https://cloud.google.com/products/calculator'] b").click();
  }
}

module.exports = new searchResultsPage();