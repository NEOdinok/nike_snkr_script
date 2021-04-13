/*почему скрипт называется profile-creator??? это ведь прога, которая
* это же просто прога, которая открывает окно и вводит данные пользователя???
*/

// эта функция есть в других файлах?
function start(link, sizes, logpass, name, middle, last, add1, add2, city, zip, mail, cnum, cdate, cvv){
    
    var login = logpass.split(":")[0];
    var password = logpass.split(":")[1];

    // вот эта функция работает странно. она выбирает рандомное число на 0.5 больше
    var number = 0;
    function randomInt(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        number = Math.round(rand);
    }

    //size is and array of all sizes separated with ","
    var size = sizes.split(", ");

    //я не понимаю че это делает. функция то-то возвращает?
    randomInt(0, size.length);

    //link is a provided link with a selected size. 
    //бот может сработать сразу для нескольких размеров?
    var readyLink = link + String(size[number]);

    //че это такое и почему это было в начале index.js ???
    //почему until с маленькой буквы???
    const { Builder, By, Key, until, Options, WebDriver } = require('selenium-webdriver');

    (async function destroyNike() {
        let driver = await new Builder().forBrowser('chrome')
            .withCapabilities({ browserName: 'chrome', chromeOptions: { args: ['user-agent="Mozilla/5.0 (Linux; arm_64; Android 10; SM-N960F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 YaBrowser/20.11.5.124.00 SA/3 Mobile Safari/537.36"'] } })
            .build();

        try {
            await driver.get(link);
            await driver.wait(until.elementLocated(By.name('emailAddress')), 100000);
            await driver.findElement(By.name('emailAddress')).click();
            await driver.findElement(By.name('emailAddress')).sendKeys(login);
            await driver.findElement(By.name('password')).sendKeys(password);
            await driver.findElement(By.name('password')).click();
            await driver.findElement(By.name('password')).sendKeys(Key.RETURN);
            await driver.wait(until.elementLocated(By.id('middleName')), 100000);
            await driver.findElement(By.id('firstName')).clear();
            await driver.findElement(By.id('firstName')).sendKeys(String(name));
            await driver.findElement(By.id('lastName')).clear();
            await driver.findElement(By.id('lastName')).sendKeys(String(last));
            await driver.findElement(By.id('firstName')).clear();
            await driver.findElement(By.id('firstName')).sendKeys(String(name));
            await driver.findElement(By.id('addressLine1')).clear();
            await driver.findElement(By.id('addressLine1')).sendKeys(String(add1));
            await driver.findElement(By.id('addressLine2')).clear();
            await driver.findElement(By.id('addressLine2')).sendKeys(String(add2));
            await driver.findElement(By.id('city')).clear();
            await driver.findElement(By.id('city')).sendKeys(String(city));
            await driver.findElement(By.id('postCode')).clear();
            await driver.findElement(By.id('postCode')).sendKeys(String(zip));
            await driver.findElement(By.id('email')).clear();
            await driver.findElement(By.id('email')).sendKeys(String(mail));
            await driver.findElement(By.id('middleName')).sendKeys(String(middle));
            await driver.sleep(1000);
            await driver.findElement(By.className('button-continue')).click();
            await driver.findElement(By.className('button-continue')).click();
            await driver.wait(until.elementLocated(By.className('new-card-link')), 20000);
            await driver.findElement(By.className('new-card-link')).click();
            await driver.wait(until.elementLocated(By.className('newCard')), 10000);
            await driver.switchTo().frame(driver.findElement(By.xpath('//*[@id="checkout"]/esw-payment-details/div/div[2]/div[1]/esw-stored-cards-list/div/div/esw-new-card/div/div/esw-payment-iframe/div/iframe')));
            await driver.findElement(By.id('cardNumber-input')).sendKeys(cnum);
            await driver.findElement(By.id('cardExpiry-input')).sendKeys(cdate);
            await driver.findElement(By.id('cardCvc-input')).sendKeys(cvv);
            await driver.sleep(1000);
            await driver.switchTo().defaultContent();
            await driver.sleep(1000);
            await driver.findElement(By.className('button-continue')).click();
            await driver.sleep(1000);
            var date = new Date();
            for (var i = 0; i < 1000; i++) {
                if (date.getHours() === 13 && date.getMinutes() === 33) {
                    console.log("hello")
                }

                    driver.sleep(1);
                }

                await driver.findElement(By.className('button-submit')).click();
                await driver.sleep(200000);

            } finally {
                    console.log("Ошибок не обнаружено, успешное завершение");
                    await driver.quit();
                }
    //у тебя вот тут зачем-то ()
    });
}