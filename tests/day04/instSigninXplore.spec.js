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

        await page.waitForTimeout(3000);

        await page.goBack();
    });
    test ("AI search", async ({page}) => {

        await page.click("//button[@id='mainMenu2']");
        await page.click("//a[@id='menuitem8']");
        await page.click("//a[@class='stats-WCIA_IEEE_Xplore_AI_Research']");
        await expect(page.getByText("Search IEEE Content Only")).toBeVisible();
        let searchIeeContentOnlyRadiobox = page.locator("//input[@id='ieee']");
        await searchIeeContentOnlyRadiobox.check();
        expect (await searchIeeContentOnlyRadiobox.isChecked()).toBeTruthy();
        let AISearchBox = page.locator("//textarea[@id='search']");
        await AISearchBox.fill("AI search");
        let aiSearchButton = page.locator("//button[contains(@class,'stats-IEEE_Research_Navigator_Search')]");
        await aiSearchButton.click();
        await page.waitForTimeout(3000);
        await page.click("(//img[@alt='Navigate to Reading Lens'])[1]");
        // after clicking line 55 withs //b[text()='Term Category']should be visible
        await expect(page.getByText("Term Category")).toBeVisible();
        await page.click("(//a[contains(@class,'stats-document-lh-action-downloadPdf_2')])[1]");
        await expect(page.url()).toContain('/stamp/stamp.jsp');
        await page.goBack();

    });


});

/*         let pageTitle = await page.title();
        console.log(`The Title is ${pageTitle}`); */