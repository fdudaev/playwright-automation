import { test } from "@playwright/test";

test("Bypass authentication by embedding the credentials in the URL", async ({ page }) => {
  // Your test steps will go here
 // await page.goto("https://admin:admin@practice.cydeo.com/basic_auth");
  await page.goto("https://xpl-ui-user:password@xplmklg-qa.ieee.org:8020/v1/documents?format=xml&uri=/IEEE/content/article/9764440.xml");
  await page.waitForTimeout(3000);

});

test("Bypass authentication by encoding credentails base64 format", async ({ page }) => {
  let encodedCredentials = Buffer.from("xpl-ui-user:password").toString("base64");
  await page.setExtraHTTPHeaders({'Authorization': `Basic ${encodedCredentials}` });
  await page.goto("https://xpl-ui-user:password@xplmklg-qa.ieee.org:8020/v1/documents?format=xml&uri=/IEEE/content/article/9764440.xml");
  await page.waitForTimeout(3000);
});