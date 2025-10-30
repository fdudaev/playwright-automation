import { test } from '@playwright/test';

test.describe('', () => {

    test.beforeEach(async ({page}) => {

        await page.goto("https://xploreqa.ieee.org/Xplore/home.jsp");
    });

  test('GlobalSearch', async ({ page }) => {
    let golobalSearch = page.locator("input.Typeahead-input[aria-label='main']");
    await golobalSearch.fill("JavaScript");
    await page.press("Enter");
    
  });

  test('Refine by authors', async ({ page }) => {
    
  });

  test('Refine by publisher', async ({ page }) => {
    
  });
});