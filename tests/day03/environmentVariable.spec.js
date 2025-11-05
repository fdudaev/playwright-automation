import { test } from "@playwright/test";

test("@mlQA Testing env vars ", async ({ page }) => {

    console.log(`ML QA User Name is ${process.env.QA_ML_UN}, and the passowrd is ${process.env.QA_ML_PW}`);

});

test("Bypass authentication by encoding credentails base64 format", async ({ page }) => {

  let encodedCredentials = Buffer.from(`${process.env.QA_ML_UN}:${process.env.QA_ML_PW}`).toString("base64");
  await page.setExtraHTTPHeaders({'Authorization': `Basic ${encodedCredentials}` });
  await page.goto("https://xpl-ui-user:password@xplmklg-qa.ieee.org:8020/v1/documents?format=xml&uri=/IEEE/content/article/9764440.xml");
  await page.waitForTimeout(3000);
});
test("@env-test", async({page}) => {
    
    console.log(`User name is ${process.env.PRACTICE_USERNAME}, and the password is ${process.env.PRACTICE_PASSWORD}`);
});

    test("Bypass authentication with sistem ent ariables", async ({page}) => {

        let encodedCredentialsForPractice = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");
        await page.setExtraHTTPHeaders({'Authorization': `Basic ${encodedCredentialsForPractice}`});
        await page.goto("https://practice.cydeo.com/basic_auth");
        await page.waitForTimeout(3000);
});


