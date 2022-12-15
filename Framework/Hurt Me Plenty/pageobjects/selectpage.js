const { By} = require('selenium-webdriver')
var BasePage = require('../pageobjects/basepage')
var webdriver = require('selenium-webdriver')

class SelectPage extends BasePage {
    fill_select(){
        // Operating System / Software
        driver.findElement(By.css('md-select-value[id="select_value_label_82"]')).click()
        driver.findElement(By.css('md-option[class=" Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)"]')).click() // Free soft
        
        // Provisioning model
        driver.findElement(By.css('md-select-value[id="select_value_label_83"]')).click()
        driver.findElement(By.css('md-option[value="regular"]')).click() // regular model

        // Series
        driver.findElement(By.css('md-select-value[id="select_value_label_85"]')).click()
        driver.findElement(By.css('md-option[value="n1"]')).click() // n1 series

        // Machine Type
        driver.findElement(By.css('md-select-value[id="select_value_label_86"]')).click()
        driver.findElement(By.css('md-option[value="CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8"]')).click() // n1-standard-8 (vCPUs: 8, RAM: 30 GB)

        // Select Add GPUs
        driver.findElement(By.css('md-checkbox[aria-label="Add GPUs"]')).click() // Add GPU button
        driver.findElement(By.css('md-select[placeholder="GPU type"]')).click()
        driver.findElement(By.css('md-option[value="NVIDIA_TESLA_P100"]')).click() //  GPU type: NVIDIA Tesla P100 (V100 недоступна)
        driver.findElement(By.css('md-select[placeholder="Number of GPUs"]')).click()
        driver.findElement(By.css('md-option[value="1"]')).click() //  Number of GPUs: 1 

        // Local SSD
        driver.findElement(By.css('md-select-value[id="select_value_label_422"]')).click()
        driver.findElement(By.css('md-option[value="2"]')).click() // 2x375 GB

        // Datacenter location
        driver.findElement(By.css('md-select-value[id="select_value_label_88"]')).click()
        driver.findElement(By.css('md-option[value="europe-west3"]')).click() // Frankfrut (europe-west3)

        // Comitad usage
        driver.findElement(By.css('md-select-value[id="select_value_label_89"]')).click()
        driver.findElement(By.css('md-option[value="1"]')).click() // 1 Year
    }
}

module.exports = new SelectPage()