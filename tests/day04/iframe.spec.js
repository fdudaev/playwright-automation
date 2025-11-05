import { test, expect } from '@playwright/test';


  test('iframe test', async ({ page }) => {

    await page.goto("https://practice.cydeo.com/iframe");

    let myFrame = page.frameLocator("//iframe[@id='mce_0_ifr']");

    let elementInsideTheFrame = myFrame.locator("//body[@id='tinymce']");

    await elementInsideTheFrame.clear();
    //await elementInsideTheFrame.press("Control+A", "Backspace"); // or "Control+A", "delete"
    await elementInsideTheFrame.fill("Hello CYDEO");

    await expect (elementInsideTheFrame).toHaveText ("Hello CYDEO");


});