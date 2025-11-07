import { expect, test } from '@playwright/test';

test("web table practice 1", async ({ page }) => {

    await page.goto("https://practice.cydeo.com/web-tables");
    let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

    let rows = await table.locator("//tr").all();
    let columns = await table.locator("//th").all();
    let cells = await table.locator("//td").all();

    expect(rows.length).toBe(9);
    expect(columns.length).toBe(13);
    expect(cells.length).toBe(104);

    for (let cell of cells){
        console.log(await cell.textContent());
    }

});

test ('web table practice 2', async ({page}) => {

    await page.goto("https://practice.cydeo.com/web-tables");

    let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

    let rows = await table.locator("//tr").all();

    // create a loop that can print each cell data of each row exclude the first and last cells of each row 
    for (let row of rows){
        let cells = await row.locator("//td").all();
        cells = cells.slice(1, -1);
        for (let cell of cells){
            console.log(await cell.textContent());
        }
    }

});

test ('web table practice 3', async ({page}) => {
    await page.goto("https://practice.cydeo.com/web-tables");
    let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

    let checkboxes = await table.locator("//input[@type='checkbox']").all();

    for (let checbox of checkboxes){
        await checbox.check();
        await expect (checbox).toBeChecked();
    }
    await page.waitForTimeout(3000);




});
