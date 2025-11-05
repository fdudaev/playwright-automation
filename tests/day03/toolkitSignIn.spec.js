import { expect, test } from "@playwright/test";

test.describe("Toolkit Sign In", async () => {
  test.beforeEach("Sign in as an admin", async ({ page }) => {
    await page.goto("https://ecopyrightuat.ieee.org/toolkit/landing");


    // Click sign in
    await page.click("text=sign in"); // Adjust selector as needed
    // Wait for OAuth page
    await page.waitForURL("**/as/authorization.oauth2?**");
    // Fill in credentials (adjust selectors based on actual form)
    await page.locator("//input[@id='username']").fill("f.zaripov+admin@ibpsg2.org");
    await page.locator("//input[@id='password']").fill("f.zaripov+admin@ibpsg2.org");
    // Click submit button
    await page.locator("//input[@id='modalWindowRegisterSignInBtn']").click();
    // Wait for redirect back to toolkit
    await page.waitForURL("**/toolkit/**");
    // Verify successful login
    await expect(page).toHaveURL(/toolkit/);
  });

  test("Search for 'All' copyrights by Sourse", async ({ page }) => {
    let sourceSearchBox = page.locator("//input[@autocomplete='a6a13f1c3b78']");
    await sourceSearchBox.click();
    await sourceSearchBox.fill("89001");
    let copyrightStatusAll = page.locator("//p[text()='All']");
    await copyrightStatusAll.check();
    let searchButton = page.locator("//button[@class='btn search-button']");
    await searchButton.click();
    await page.waitForTimeout(3000);
  });
});
