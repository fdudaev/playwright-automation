import { test, expect } from '@playwright/test';

test('Perform advance search @advSearch', async ({ page }) => {
  // Step 2: Navigate to URL and verify
  await page.goto('https://xploreqa.ieee.org/Xplore/home.jsp');
  await expect(page).toHaveURL(/https:\/\/xploreqa\.ieee\.org\//);

  // Step 3: Verify page title
  await expect(page).toHaveTitle('IEEE Xplore');

  // Step 4: Click on Advance Search button
  await page.locator("(//a[@href='/search/advanced']/span)[1]").click();

  // Step 5: Verify URL contains "/search/advanced"
  await expect(page).toHaveURL(/\/search\/advanced/);

  // Step 6: Enter Search term "Java"
  await page.locator("(//input[@type='text' and @aria-label='Search Term'])[1]").fill('Java');

  // Step 7: Check the radio button for Publication year
  await page.locator("//input[@id='id_1' and @type='radio']").check();

  // Step 8: Enter "2020" on from box
  await page.locator("//input[@aria-label='Enter start year of range']").fill('2020');

  // Step 9: Enter "2024" on to box
  await page.locator("//input[@aria-label='Enter end year of range']").fill('2024');

  // Step 10: Click on Search button
  await page.locator("//button[contains(@class, 'xpl-btn-primary')]").click();

  // Step 11: Verify URL contains "java", "2020" and "2024"
/*   await expect(page).toHaveURL(/java/);
  await expect(page).toHaveURL(/2020/);
  await expect(page).toHaveURL(/2024/); */
});