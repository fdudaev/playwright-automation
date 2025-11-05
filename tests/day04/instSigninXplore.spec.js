import { test } from '@playwright/test';

test.describe('Open QA URl', () => {

    test.beforeEach('', async ({ page }) => {
        await page.goto('https://xploreqa.ieee.org/Xplore/home.jsp');
        let instSigninButton = page.locator("//div[@class='institution-container hide-mobile']"); 
        await instSigninButton.click();
        let signinWithUsernameAndPasswordButton = page.locator("//button[@class='font-weight-800 reg-signin-pwd' and ancestor::*[@class='hide-mobile']]");
        await signinWithUsernameAndPasswordButton.click();
        let userNameField = page.locator("//input[@id='username']");
        await userNameField.fill('XPLORETESTAIP');
        let passwordField = page.locator("//input[@id='password']");
        await passwordField.fill('QAOnly123!');
        let signinButton = page.locator("//span[text()='Sign In']");
        await signinButton.click();
    });
    test('Search for Ar# and open pdf ', async ({ page }) => {
        
        page.locator("//input[@id='search-input']").fill('7780459');
        page.locator("/html/body/div[5]/div/div/div[3]/div/xpl-root/header/xpl-header/div/div[2]/div[2]/xpl-search-bar-migr/div/form/div[2]/div/div[2]").click();
        



    });

    test('test', async ({ page }) => {
        
    });

    test('tests', async ({ page }) => {
        
    });

});
