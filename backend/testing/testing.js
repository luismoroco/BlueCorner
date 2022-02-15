const {Builder, By, Key} = require('selenium-webdriver');

async function Testing(x, y, z, m, n) {
    driver = new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/');

    await driver.findElement(By.xpath('//*[@id="root"]/form[2]/input')).sendKeys(y, driver.Key.ENTER);
    await driver.findElement(By.xpath('//*[@id="root"]/form[2]/input')).sendKeys(z, driver.Key.ENTER);
    await driver.findElement(By.xpath('//*[@id="root"]/form[2]/input')).sendKeys(m, driver.Key.ENTER);
    await driver.findElement(By.xpath('//*[@id="root"]/form[2]/input')).sendKeys(n, driver.Key.ENTER);
    
    await driver.findElement(By.xpath('//*[@id="root"]/form[1]/input')).sendKeys(x, driver.Key.ENTER);

    let res = await driver.findElement(By.xpath('//*[@id="root"]/table[2]/tr[2]/td[1]')).getText();

    await driver.findElement(By.xpath('/html/body/div[3]/div[1]/table[1]/tbody/tr[2]/td/input[2]')).click();

    await driver.close();
    return String(res);
};

module.exports = Testing;