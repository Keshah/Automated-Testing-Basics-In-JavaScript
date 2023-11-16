
const searchResultsPage = require('../pageobjects/searchResultsPage')
const mainGoogleCloudPage = require('../pageobjects/mainGoogleCloudPage')
const productsCalculatorPage = require('../pageobjects/productsCalculatorPage')
const computeEngineForm = require('../pageobjects/computeEngineForm')
const modalWindowEmailYourEstimate = require('../pageobjects/modalWindowEmailYourEstimate')
const tempMailPage = require('../pageobjects/tempMailPage')

// "Hurt Me Plenty" Task
describe("Cloud Google", () => {

  it("Should send email", async () => {
    await browser.maximizeWindow();
    await browser.url("https://cloud.google.com/");

    await mainGoogleCloudPage.setSearchInput("Google Cloud Platform Pricing Calculator");
    await mainGoogleCloudPage.pressEnter();

    await searchResultsPage.clickOnGoogleCloudPricingCalculator();

    await productsCalculatorPage.switchToFrame();
    await productsCalculatorPage.tabComputeEngineIsSelectedByDefault();

    await computeEngineForm.fillInputNumberOfInstances("4");
    await computeEngineForm.clickOnDropdown("Operating System / Software");
    await computeEngineForm.selectDropdownValue("Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)");
    await computeEngineForm.clickOnDropdown("Provisioning model"); 
    await computeEngineForm.selectDropdownValue("Regular");
    await computeEngineForm.clickOnDropdown("Series"); // need select Series to select 'n1-standard-8 (vCPUs: 8, RAM: 30 GB)'
    await computeEngineForm.selectDropdownValue("N1");
    await computeEngineForm.clickOnDropdown("Machine type");
    await computeEngineForm.selectDropdownValue("n1-standard-8 (vCPUs: 8, RAM: 30GB)");
    await computeEngineForm.selectCheckbox("Add GPUs");
    await computeEngineForm.clickOnDropdown("GPU type");
    await computeEngineForm.selectDropdownValue("NVIDIA Tesla V100");
    await computeEngineForm.clickOnDropdown("Number of GPUs");
    await computeEngineForm.selectDropdownValue("1");
    await computeEngineForm.clickOnDropdown("Local SSD");
    await computeEngineForm.selectDropdownValue("2x375 GB");
    await computeEngineForm.clickOnDropdown("Datacenter location");

    // other select dropdown
    await computeEngineForm.fillInputRegion("Frankfurt");
    await computeEngineForm.selectDropdownValueRegion("Frankfurt (europe-west3)");

    await computeEngineForm.clickOnDropdown("Committed usage");
    // other select dropdown
    await computeEngineForm.selectDropdownValueCommittedUsage("1 Year");

    await computeEngineForm.clickOnAddToEstimate();

    // "Hardcore" Task
    await computeEngineForm.clickOnEmailEstimate();
    await browser.newWindow("https://tempail.com/");
    await browser.pause(2000)
    await $('//a[@class="kopyala-link"]').click()
    await browser.switchWindow("https://cloud.google.com/")
    await productsCalculatorPage.switchToFrame();
    
    const $pasteInput = await $("//label[contains(text(),'Email')]/../input")
    await $pasteInput.click()
    await browser.keys(['Control', 'v'])
    await browser.pause(2000)
  
    await $("//button[contains(., 'Send Email')]").click()
    await browser.switchWindow("https://tempail.com/")
    await browser.pause(2000)
    await $('//div[@class="message_top"]').scrollIntoView({ block: 'center', inline: 'center' });
    await $('//div[@class="message_top"]').waitForDisplayed(20000)
    await $('//div[@class="message_top"]').click()

    const result = await $('#epostalar li:nth-child(2) a')
    await result.waitForDisplayed()
    neededResult = await result.getText()

    expect(result).to.include(neededResult)


   // await browser.newWindow("https://www.1secmail.com/");

   // await $("//a[contains(., 'Copy')]").click()
   // await browser.switchWindow("https://cloud.google.com/")
   // await productsCalculatorPage.switchToFrame();
   // 
   // const $pasteInput = await $("//label[contains(text(),'Email')]/../input")
   // await $pasteInput.click()
   // await browser.keys(['Control', 'v'])
  
   // await $("//button[contains(., 'Send Email')]").click()
   // await browser.switchWindow("https://www.1secmail.com/")
   // await browser.pause(2000)

   // //await browser.switchToFrame(await $('//iframe[@id="google_esf"]'));
   // await browser.switchToFrame(await $('//iframe[@id="aswift_5"]'));
   // await browser.switchToFrame(await $('//iframe[@name="ad_iframe"]'));

   // await $("#dismiss-button").click()
   // await browser.switchToParentFrame();
   // await browser.switchToParentFrame();
   // await $("//table//tbody//tr[2]").waitForDisplayed(3000)
   // await $("//table//tbody//tr[2]").click()


    await browser.pause(6000000)


  })
})
