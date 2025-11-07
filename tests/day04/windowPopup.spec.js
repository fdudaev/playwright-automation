import {expect, test} from '@playwright/test';

test ('Window pop-up practice', async  ({page}) => {

    // creating event listener for monitoring window pop-ups
    let promissedNewPageEvent = page.waitForEvent("popup"); // we dont give await keyward for event listeners
    await page.goto("https://practice.cydeo.com/windows");
    await page.click("text='Click Here'"); // trigers the popup event

    let newPage = await promissedNewPageEvent; // await for the promissed to be resolved

    await expect (newPage).toHaveTitle("New Window");

    await page.bringToFront();
    let firstWindowElement = page.getByText("Opening a new window");
    await expect(firstWindowElement).toBeVisible();

    // if we are automating the new poped up window we are using the new instance ex: newPage.locate("element");
    await newPage.bringToFront();
    let secondWindowElement = newPage.getByText("New Window");
    await expect(secondWindowElement).toBeVisible();




});