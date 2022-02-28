const {Builder, By} = require('selenium-webdriver');

function Testing(x, y, z, m, n) {
    
    let res;
    try {
        driver = new Builder().forBrowser('chrome').build();
        driver.get('http://localhost:3000')
        
        driver.findElement(By.xpath('//*[@id="root"]/form[1]/input')).sendKeys(x);

        driver.findElement(By.xpath('//*[@id="root"]/form[2]/input')).sendKeys(y);
        driver.findElement(By.xpath('//*[@id="root"]/form[2]/button')).click();

        driver.findElement(By.xpath('//*[@id="root"]/form[2]/input')).sendKeys(z);
        driver.findElement(By.xpath('//*[@id="root"]/form[2]/button')).click();

        driver.findElement(By.xpath('//*[@id="root"]/form[2]/input')).sendKeys(m);
        driver.findElement(By.xpath('//*[@id="root"]/form[2]/button')).click();

        driver.findElement(By.xpath('//*[@id="root"]/form[2]/input')).sendKeys(n);
        driver.findElement(By.xpath('//*[@id="root"]/form[2]/button')).click();  

        driver.findElement(By.xpath('//*[@id="root"]/form[1]/button')).click();

        res = driver.findElement(By.xpath('//*[@id="root"]/table[2]/tr[2]/td[1]')).getText();

        driver.findElement(By.xpath('//*[@id="root"]/table[2]/tr[2]/td[3]/button')).click();
    } catch (e) {
        console.log(e);
    }

    driver.navigate().to('http://localhost:3000');
    driver.close();

    return String(res);
};

module.exports = Testing;