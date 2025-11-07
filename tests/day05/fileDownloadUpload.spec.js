import {expect, test} from '@playwright/test';
import path from 'path';
import fs from 'fs';

test('File Downloads', async ({page}) => {
    //created an event listener for download
    let prmossiedDownloadEvent = page.waitForEvent("download");

    await page.goto("https://practice.cydeo.com/download");

    // Click on the insurance.jpg link to trigger the download
    await page.click("text='Uzbekistan_Tashkent.jpg'");
    
    // Wait for the download event to complete and get the download object
    let download = await prmossiedDownloadEvent;
    
    // Construct the path where the file will be saved
    let downloadPath = path.join(__dirname, "./downloads", download.suggestedFilename());
    
    // Save the downloaded file to the specified path
    await download.saveAs(downloadPath);

    expect (fs.existsSync(downloadPath)).toBeTruthy();


});

test('File Upload', async ({page}) => {

    await page.goto("https://practice.cydeo.com/upload");

    let filePath = path.join(__dirname, "./uploads", "TestUploads.txt");

    await page.setInputFiles("//input[@id='file-upload']", filePath);

    page.click("//input[@id='file-submit']");

    await expect(page.getByText("File Uploaded!")).toBeVisible();



});