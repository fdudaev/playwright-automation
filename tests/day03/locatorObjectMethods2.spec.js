import { test } from '@playwright/test';

test.describe('', () => {

    test.beforeEach('', async ({ page }) => {
        await page.goto("https://practice.cydeo.com/")
    });

    test('innerText(): retrives the visible text', async ({ page }) => {
        let headerElement = page.locator("//span[@class='h1y']");  

       let actualText = await headerElement.innerText();
       console.log(actualText);


    });

    test('unputValue(): only works with <input>, <textare>, <select> tags and returns  the input value', async ({ page }) => {
        
        let inputsLink = page.getByText("Inputs");
        await inputsLink.click();

        let inputBox = page.locator("//input[@type='number']");
        await page.waitForTimeout(3000);

        await inputBox.fill("1234");
        await page.waitForTimeout(3000);

        let actualInput = await inputBox.inputValue();
        console.log(`The input is ${actualInput}`);


    });

    test('getAttribute():retrives the attriblte value  ', async ({ page }) => {

        let abTestingLink = page.locator("a[href='/abtest']");
        let hrefLink = await abTestingLink.getAttribute("href");

        console.log(hrefLink);

    });

});