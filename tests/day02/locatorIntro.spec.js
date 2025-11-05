import {test} from '@playwright/test';

test('', async({page}) => {
    await page.goto("https://www.google.com/");
    let searchBox = await page.locator("//textarea[@name='q']");
    await searchBox.fill("Playwright"); // types all string at once
    await page.waitForTimeout(3000); // wait for 3 second
    await searchBox.fill("Playwright"); // types one character at a time
    await page.waitForTimeout(3000); // wait for 3 second
    await searchBox.press("Enter"); // press Enter key
    await page.waitForTimeout(3000); // wait for 3 second
});
