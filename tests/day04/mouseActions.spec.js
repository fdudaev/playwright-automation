import { test } from '@playwright/test';
import { waitForDebugger } from 'inspector';

test.describe('', () => {
    test.beforeEach("Open URL", async ({ page }) => {
        page.goto("https://practice.cydeo.com/");
    });
    test.afterEach("Pause for 3 secunds", async ({ page }) => {
    });

    test('Left Click', async ({ page }) => {
        await page.click("text='A/B Testing'");
    });

    test('Right Click', async ({ page }) => {
        await page.click("text='A/B Testing'", { button: "right" });
    });

    test('Hover', async ({ page }) => {
        await page.click("text='Hovers'");
        //await page.hover("//img[@alt='User Avatar']");
        let elements = await page.locator("//img[@alt='User Avatar']").all();

        for (let each of elements) {
            await each.hover();
        }


    });

/*     test('Mouse wheel scrilling', async ({ page }) => { // playwright has autoscrolling 

       // await page.mouse.wheel(0, 2000); // manual scrilling


    }); */

    test('Scrilling to specific element', async ({ page }) => {

        let inputsLink = await page.getByText("Inputs");
        await inputsLink.scrollIntoViewIfNeeded();
        await inputsLink.click();

    });

    test('Drag and Drop', async ({ page }) => {
        await page.click("text='Drag and Drop'");

        // await page.dragAndDrop("//div[@id='column-a']", "//div[@id='column-b']");
        let source = page.locator("//div[@id='column-a']");
        let target = page.locator("//div[@id='column-b']");

        await source.dragTo(target);
    });

});