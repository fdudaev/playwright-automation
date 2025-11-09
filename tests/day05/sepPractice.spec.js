import { test } from '@playwright/test';

test("SEP Practice @sep", async ({ page }) => {

    const USERNAME = "automation-user";
    const PASSWORD = "123abc";

    const ENCODED_CREDENTIALS = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");

    await page.setExtraHTTPHeaders({ 'Authorization': `Basic ${ENCODED_CREDENTIALS}` });

    await page.goto(`${process.env.SEP_QA_URL}`);

    await page.waitForTimeout(2000);

    let firstNameInput = page.locator("//input[@formcontrolname='firstName']");
    await firstNameInput.fill("Farrukh");

    let lastNameInput = page.locator("//input[@formcontrolname='lastName']");
    await lastNameInput.fill("Farrukh");

    let emailInput = page.locator("//input[@formcontrolname='email']");
    await emailInput.fill("Farrukh.Farrukh@example.com");

    let phoneInput = page.locator("//input[@formcontrolname='phoneNumber']");
    await phoneInput.fill("05555555555");

    await page.waitForTimeout(2000);


})