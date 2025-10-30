import {test} from '@playwright/test';

test('Get the title of the page', async({page}) => {

    await page.goto("https://practice.cydeo.com/");
    let actualTitle = await page.title();
    console.log(actualTitle);

});
test('Getting current url', async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
    let currentURL =  page.url();
    console.log(currentURL);
});