import { test, expect } from '@playwright/test';

test.describe("Creaste New AO Conference Publication", () => {
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

        let publicationSetupTab = page.locator("//button[@routerlinkactive='active'][contains(text(), 'Publication Setup')]");
        await publicationSetupTab.click();

        let createNewButton = page.locator("//button[@class='button-element'][contains(text(), 'Create New')]");
        await createNewButton.click();

        const uniqueSourceId = `Auto${Math.floor(Math.random() * 1000)}QA`;

        let sourceInputField = page.locator("(//input[@aria-autocomplete='list'][@type='text'])[2]");
        await sourceInputField.click();
        await sourceInputField.fill(uniqueSourceId);

        let addItemSoureID = page.locator(`//div[@role='option' and contains(., '${uniqueSourceId}')]`);
        await addItemSoureID.click();

        const uniquePubsEmail = `f.zaripov+${Math.floor(Math.random() * 100000)}@ieee.org`;
        let pubOrganizerEmailInputField = page.locator("(//input[@aria-autocomplete='list'][@type='text'])[3]");
        await pubOrganizerEmailInputField.fill(uniquePubsEmail);
        let addItemPubsEmail = page.locator(`//div[@role='option' and contains(., '${uniquePubsEmail}')]`);
        await addItemPubsEmail.click();

        let unqiuePubOrgName = `Pub Org Name ${Math.floor(Math.random() * 100000)} QA Test`;
        let pubOrganizerNameFieldInput = page.locator("//input[@id='PubOrganiserName']");
        await pubOrganizerNameFieldInput.fill(unqiuePubOrgName);

        let unqiuePubTitle = `Pub Title ${Math.floor(Math.random() * 100000)} QA Test`;
        let pubTitleInputField = page.locator("//input[@id='PublicationTitle']");
        await pubTitleInputField.fill(unqiuePubTitle);

        let publicationTypeDropdown = page.locator("//select[@name='Publication Type']")
        await publicationTypeDropdown.selectOption('Magazine');

        let publicationFlowpathDropdown = page.locator("//select[@name='Publication Flowpath']");
        await publicationFlowpathDropdown.selectOption("Hybrid");

        let trustedDomainInputField = page.locator("//input[@id='TrustedDomain']");
        await trustedDomainInputField.fill("ieee.org");

        let updatedUrlInputField = page.locator("//input[@id='UpdatedUrl']");
        await updatedUrlInputField.fill("https://ieeexplore.ieee.org/Xplore/home.jsp");

        let publicationCreateButton = page.locator("//button[@type='submit'][@class='button-element margin-right']");
        await publicationCreateButton.click();

        await page.waitForTimeout(3000);

    });
});
