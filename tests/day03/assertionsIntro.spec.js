import { test, expect } from "@playwright/test";
import { secureHeapUsed } from "crypto";
import { waitForDebugger } from "inspector";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");

    await expect(page).toHaveTitle("Practice");
    expect(await page.title()).toBe("Practice");
  });

  test("Verify checkboxes are checked", async ({ page }) => {
    // Add test steps here
    await page.getByText("Checkboxes").click();
    let firstCheckbox = page.locator("input[name='checkbox1'][id='box1']");
    let secondCheckbox = page.locator("input[name='checkbox2'][id='box2']");

    await firstCheckbox.check();
    await secondCheckbox.check();

    await expect(firstCheckbox).toBeChecked();
    await expect(secondCheckbox).toBeChecked();
    // --------------------------------------------
    expect(await firstCheckbox.isChecked()).toBeTruthy();
    expect(await secondCheckbox.isChecked()).toBeTruthy();
  });

  test("Verify chechboxes are unchecked", async ({ page }) => {
    await page.getByText("Checkboxes").click();
    let firstCheckbox = page.locator("input[name='checkbox1'][id='box1']");
    let secondCheckbox = page.locator("input[name='checkbox2'][id='box2']");

    await firstCheckbox.uncheck();
    await secondCheckbox.uncheck();

    await expect(firstCheckbox).not.toBeChecked();
    await expect(secondCheckbox).not.toBeChecked();
    // --------------------------------------------
    expect (await firstCheckbox.isChecked()).toBeFalsy();
    expect (await secondCheckbox.isChecked()).toBeFalsy();

  });

  test("Verify Visible text element", async ({ page }) => {
    // Add test steps here
    let headerElement = page.locator("//span[@class='h1y']");
    
    await expect(headerElement).toHaveText("Test Automation Practice");

    let actualText = await headerElement.innerText();
    expect (actualText).toEqual("Test Automation Practice");
    console.log(`The header text is ${actualText}`);
  });
});
