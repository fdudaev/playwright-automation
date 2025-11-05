import { test } from '@playwright/test';


  test('iframe test', async ({ page }) => {


    await page.goto("https://practice.cydeo.com/frames");

    let myFrame = page.frameLocator("//a[@href='/iframe']");

    let elementInsideTheFrame = myFrame.locator("//body[@id='tinymce']");
    await page.waitForTimeout(3000);

    await elementInsideTheFrame.clear();

    await elementInsideTheFrame.fill("Hello CYDEO");

    await page.waitForTimeout(3000);

    await expect (elementInsideTheFrame).toHaveText ("Hello CYDEO");



});