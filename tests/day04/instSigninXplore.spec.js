import { expect, test } from '@playwright/test';

test.describe('Open QA URl', () => {

    test.beforeEach('', async ({ page }) => {
        await page.goto('https://xploreqa.ieee.org/Xplore/home.jsp');
        let instSigninButton = page.locator("//div[@class='institution-container hide-mobile']"); 
        await instSigninButton.click();
        let signinWithUsernameAndPasswordButton = page.locator("//div[@class='hide-mobile']//button[@class='xpl-btn-secondary w-300-px reg-signin-pwd']");
        await signinWithUsernameAndPasswordButton.click();
        let userNameField = page.locator("//input[@id='username']");
        await userNameField.fill('XPLORETESTAIP');
        let passwordField = page.locator("//input[@id='password']");
        await passwordField.fill('QAOnly123!');
        let signinButton = page.locator("//span[text()='Sign In']");
        await signinButton.click();
    });

    test.afterEach('Sign out', async ({page}) => {
        let instSignOutButton = page.locator("(//a[@class='reg-inst-signout'])[1]");
        await instSignOutButton.click();
        await expect(page.url()).toContain("signout=success");
    });

    test('Search for Ar# and open pdf ', async ({ page }) => {
        let globalSearchbox = await page.locator("(//input[@type='search' and @aria-label='main'])[1]"); 
        await globalSearchbox.click();
        let arNumber = "7780459";
        await globalSearchbox.fill(arNumber);

        let goloabSearchboxSearchButton = page.locator("(//button[@data-analytics_identifier='global_search_icon'])[1]");
        await goloabSearchboxSearchButton.click();

        await expect(page.getByText("7780459")).toBeVisible();

        await page.click(`//a[@class='stats_PDF_${arNumber} u-flex-display-flex']`);
        await expect(page.url()).toContain('/stamp/stamp.jsp');

        await page.goBack();
    });
});