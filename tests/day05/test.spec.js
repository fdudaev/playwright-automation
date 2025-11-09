import { test, expect } from '@playwright/test';

test('Verify all links under ul tag are displayed and enabled', async ({ page }) => {
  // Step 1 and 2: Open browser and navigate to the URL
  await page.goto('https://practice.cydeo.com/');

  // Step 3: Verify the URL contains "practice.cydeo"
  await expect(page).toHaveURL(/practice\.cydeo/);

  // Step 4: Verify the title is "Practice"
  await expect(page).toHaveTitle('Practice');

  // Step 5: Verify all links under the ul tag with class 'list-group' are visible and enabled
  const links = page.locator("//ul[@class='list-group']//a");
  const count = await links.count();
  for (let i = 0; i < count; i++) {
    await expect(links.nth(i)).toBeVisible();
    await expect(links.nth(i)).toBeEnabled();
  }
});
