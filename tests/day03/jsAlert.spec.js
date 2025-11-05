import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach("Open url", async ({ page }) => {
    await page.goto("https://practice.cydeo.com/javascript_alerts");
  });

  test("Regular Alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      // to handle the alert manually
      console.log(`Alert Message: ${alert.message()}`);

      await alert.accept();
    });

    let clickForJsAlertButton = page.locator("//button[text()='Click for JS Alert']");

    await clickForJsAlertButton.click();

  });

  test("Confirmation Alert", async ({ page }) => {

    page.on("dialog", async (alert) => {

      console.log(`Alert Message: ${alert.message()}`);
      await alert.dismiss();

    });

    let clickforJsConfirmButton = page.locator("//button[text()='Click for JS Confirm']");
    await clickforJsConfirmButton.click();
  });

  test("Prompt Alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(`Alert Message is: ${alert.message()}`);
      await alert.accept("FZ");

    });
    let clickForJPromptButton = page.locator("//button[text()='Click for JS Prompt']");
    await clickForJPromptButton.click();
  });
});
