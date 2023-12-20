const puppeteer = require('puppeteer')
const readLineSync = require('readline-sync')

const doScrap = async () => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    const baseCurrency = readLineSync.question('Informe uma moeda base ') || 'dolar'
    const finalCurrency = readLineSync.question('Informe uma moeda desejada ') || 'iene'

    const url = `https://www.google.com/search?q=${baseCurrency}%20para%20${finalCurrency}`

    await page.goto(url);

    const result = await page.evaluate(() => document.querySelector('.lWzCpb.a61j6').value)

    console.log(`O valor de 1 ${baseCurrency} em ${finalCurrency} é ${result}`);

    await browser.close();
}

doScrap()