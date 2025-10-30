import {test} from '@playwright/test';

test.describe("Xplore application", async () => {

    test.beforeEach(async ({page}) => {
        await page.goto("https://xploreqa.ieee.org/Xplore/home.jsp")
    });
    test.afterEach(async({page}) => {
        await page.waitForTimeout(3000)
    });
    test("Get the Title", async ({page}) => {
        console.log(await page.title());
    });
    test("Get URL", async ({page}) =>{
        console.log(page.url());
    });


});