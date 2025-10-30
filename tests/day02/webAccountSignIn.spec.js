import {test} from '@playwright/test';
test ('Sign in as a webAccount', async({page}) => {
    
    await page.goto("https://xploreqa.ieee.org/Xplore/home.jsp");
    await page.click("//a[@title='Sign In' and contains(text(),'Personal Sign In')]");
    await page.click("//input[@name='username' and @placeholder='Email Address']").fill("f.zaripov@sg001.org");
   

});