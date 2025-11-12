import { test } from '@playwright/test';

test.describe("Creaste New AO Conference Publication", async ({ page }) => {
    test.beforeEach('Sign in as an admin', async ({ page }) => {

        await page.goto("https://ecopyrightuat.ieee.org/toolkit/landing");

        await page.click("text=sign in"); 
        await page.waitForURL("**/as/authorization.oauth2?**");
        await page.locator("//input[@id='username']").fill("f.zaripov+admin@ibpsg2.org");
        await page.locator("//input[@id='password']").fill("f.zaripov+admin@ibpsg2.org");
        await page.locator("//input[@id='modalWindowRegisterSignInBtn']").click();
        await page.waitForURL("**/toolkit/**");
        await expect(page).toHaveURL(/toolkit/);

    });
    test('Create a new AO Conference Publication', async ({ page }) => {

        let publicationSetupTab = await page.locator("//button[@routerlinkactive='active'][contains(text(), 'Publication Setup')]");
        await publicationSetupTab.click();

        let createNewButton = await page.locator("//button[@class='button-element'][contains(text(), 'Create New')]");
        await createNewButton.click();

        let sourceInputField = await page.locator("(//input[@aria-autocomplete='list'][@type='text'])[2]");
        await sourceInputField.click();


    });
});