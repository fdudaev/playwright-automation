// import the test function 

// const{test} = require("@playwright/test") // old way of Import the {test} function from the Playwright Test library
import {test} from '@playwright/test'; // new way of importing the {test} function from the Playwright Test library

/* 
Calling test function and adding two arguments: assync is a callback function: test() taking async() as an argument.
1) Strung "", and 2) an async function ()-to define the function, => arrow token, {} - to define the scope of the function
assync({we pass set of fixtures this function can use})
*/
test("", async({page}) => { // page is a fixture, similart to driver in Selenium

    // if a methods returns a Promise, you can use await to wait for it to resolve.
    //page.goto("https://google.com"); it will fail due to most methods in playwirght return Promises, you need to use await.
    await page.goto("https://xploreqa.ieee.org/Xplore/home.jsp"); // awaiting the page to load
    await page.waitForTimeout(3000); // waiting 3 seconds to ensure page is fully loaded

}); 

