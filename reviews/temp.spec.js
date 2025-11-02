import { test } from '@playwright/test';

test.describe('Test Cases of the User Story', () => {

    test.beforeEach(async () =>{ 
        console.log("Before each test cases");
    });
    test.afterEach("After each test case");
  test('TestCase 1', async ({ page }) => {
    // Add test steps here
  });

  test('TestCase 2', async ({ page }) => {
    // Add test steps here
  });

  test('TestCase 2', async ({ page }) => {
    // Add test steps here
  });
});

test("One Signle Test Case"), async () => {
    // Add test steps here
    // This test case will run only once
};