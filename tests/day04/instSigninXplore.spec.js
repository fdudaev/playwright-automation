import { test } from '@playwright/test';

test.describe('Open QA URl', () => {

    test.beforeEach('', async ({ page }) => {
        await page.goto('https://xploreqa.ieee.org/Xplore/home.jsp');
        let instSigninButton = page.locator("//div[@class='institution-container hide-mobile']"); 
        await instSigninButton.click();
        // let signinWithUsernameAndPasswordButton = page.locator("//button[@class='font-weight-800 reg-signin-pwd' and ancestor::*[@class='hide-mobile']]"); //when saml is off 
        let signinWithUsernameAndPasswordButton = page.locator("//div[@class='hide-mobile']//button[@class='xpl-btn-secondary w-300-px reg-signin-pwd']");
        await signinWithUsernameAndPasswordButton.click();
        let userNameField = page.locator("//input[@id='username']");
        await userNameField.fill('XPLORETESTAIP');
        let passwordField = page.locator("//input[@id='password']");
        await passwordField.fill('QAOnly123!');
        let signinButton = page.locator("//span[text()='Sign In']");
        await signinButton.click();
    });
    test('Search for Ar# and open pdf ', async ({ page }) => {
        
        let globalSearchbox = page.locator("//xpl-typeahead-migr//input[@class='Typeahead-input ng-valid ng-dirty ng-touched']");
        await globalSearchbox.waitFor({ state: 'visible', timeout: 100000 });
        await globalSearchbox.click();
        //await globalSearchbox.click();
        await globalSearchbox.fill("7780459");
        globalSearchbox.press("Enter");
        





    });

    test('test', async ({ page }) => {
        
    });

    test('tests', async ({ page }) => {
        
    });

});
