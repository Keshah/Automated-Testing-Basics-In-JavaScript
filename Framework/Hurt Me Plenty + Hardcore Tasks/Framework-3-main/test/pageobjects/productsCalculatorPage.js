const {$} = require('@wdio/globals');

class productsCalculatorPage {

  async switchToFrame() {
    const frame = await  $('//devsite-iframe/iframe'); // 1 frame
    expect(frame).toExist();
    await browser.switchToFrame(frame);
    await $('#myFrame').waitForDisplayed(5000); // 2 Frame
    const frame1 = await  $('#myFrame');
    // expect(frame1).toExist();
    await browser.switchToFrame(frame1);
  }

  async tabComputeEngineIsSelectedByDefault() {
    const tab = "//span[text()='Compute Engine']//ancestor::md-tab-item";

    await expect($(tab)).toHaveAttribute("aria-selected", "true");
  }
}

module.exports = new productsCalculatorPage();