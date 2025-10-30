import { test } from '@playwright/test';

test.describe('Test Plan', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");
    });
    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(3000);
    });
    test('Check(): is a mehthod to checks the radiobuttons and checkboxes if they arent check yet', async ({ page }) => {
        // let checkboxesLink = page.locator("text='Checkboxes'");
        let checkboxesLink = page.getByText("Checkbox");
        await checkboxesLink.click();
        let checkbox1 = page.locator("//input[@id='box1']");
        await checkbox1.check();

    });

    test('Uncheck(): is a method to uncheck checked radio buttons and check boxes', async ({ page }) => {
        let checkboxesLink = page.getByText("Checkbox");
        await checkboxesLink.click();
        let checkbox2 = page.locator("//input[@id='box2']");
        await checkbox2.uncheck();
    });

    test('SelectOption(): is used for dropdowns ', async ({ page }) => {
        let dropdownLink = page.getByText("Dropdown");
        await dropdownLink.click();
        let simpleDropdown = page.locator("//select[@id='dropdown']");
       // await simpleDropdown.selectOption("2"); // selecting by the value
       //await simpleDropdown.selectOption({label: "Option 2"}); // selectint by text with key and value
       await simpleDropdown.selectOption({index: 2});// selecting by index

    });
});