import { test } from "@playwright/test";

test.describe("Practice.cydei", async () => {

    test.beforeEach(async({page}) => {  // all presteps go to inside codeblock
        await page.goto("https://practice.cydeo.com/");
    })
    test.afterEach(async({page}) => {
        await page.waitForTimeout(3000);
    });

    test("Get the title of the page", async ({page})=> {
        let siteTitle = await page.title();
        console.log(`The Title is ${siteTitle}`);
    });

    test("Gets the url", async ({page}) => {
        let currentURL = await page.url();
        console.log(`URL is ${currentURL}`);
    });



});