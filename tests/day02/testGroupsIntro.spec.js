import {test} from '@playwright/test'

test.describe ("User Story", async() => {

    test.beforeAll (async() => {
        console.log("|---------------------------------|");  // execute only once before all test cases are executed
    });
// ______________________________________________________________________________________
    test.beforeEach(async() => {
        console.log("______________________"); // execute this before each test cases
    });
    test.afterEach(async() => {
        console.log("~~~~~~~~~~~~~~~~~~~~~~~"); // execute this after each test cases
    });
// ______________________________________________________________________________________
    test("Test Case 1", async ({page}) => {
        console.log("Test Case 1 is executed");
    });
    test("Test Case 2", async ({page}) => {
        console.log("Test Case 1 is executed");
    });
    test("Test Case 3", async ({page}) =>{
        console.log("Test Case 1 is executed");
    });
// ______________________________________________________________________________________
    test.afterAll(async() => {
        console.log("|__________________________________|");  // execute only once after all test cases are executed
    });
// ______________________________________________________________________________________
});