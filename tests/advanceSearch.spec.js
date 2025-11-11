import { expect, test } from '@playwright/test';

test('Perform advance search @Advance_Search', async ({ page }) => {
  // Step 2: Navigate to URL and verify it contains the base URL
  await page.goto('https://xploreqa.ieee.org/Xplore/home.jsp');
  expect(page.url()).toContain('https://xploreqa.ieee.org/');

  // Step 3: Verify page title is IEEE Xplore
  const pageTitle = await page.title();
  expect(pageTitle).toContain('IEEE Xplore');

  // Step 4: Click on personal sign in button
  const serpPersonalSignInButton = "//a[@title='Sign In'][@class='stats-Unav_P_SignIn hide-mobile u-pr-05']";
  await page.locator(serpPersonalSignInButton).click();

  // Step 5: Enter email address
  const emailAddressField = "//input[@name='username']";
  await page.locator(emailAddressField).fill('f.zaripov@sg001.org');

  // Step 6: Enter password
  const passwordField = "//input[@name='password']";
  await page.locator(passwordField).fill('f.zaripov@sg001.org');

  // Step 7: Click on sign in button
  const signInButton = "//button[@class='xpl-btn-primary stats-Unav_Per_SignIn']";
  await page.locator(signInButton).click();

  // Step 8: Wait for 3 seconds
  await page.waitForTimeout(3000);

  // Step 9: Click on Advance Search button
  const advanceSearchButton = "(//a[@href='/search/advanced']/span)[1]";
  await page.locator(advanceSearchButton).click();

  // Step 10: Verify URL contains /search/advanced
  expect(page.url()).toContain('/search/advanced');

  // Step 11: Enter search term "Java"
  const searchTermField = "(//input[@type='text' and @aria-label='Search Term'])[1]";
  await page.locator(searchTermField).fill('Java');

  // Step 12: Check the radio button for Publication year
  const publicationYearRadio = "//input[@id='id_1' and @type='radio']";
  await page.locator(publicationYearRadio).check();

  // Step 13: Click on Search button
  const searchButton = "//button[contains(@class, 'xpl-btn-primary')]";
  await page.locator(searchButton).click();

  // Step 14: Wait for 4 seconds
  await page.waitForTimeout(4000);

  // Step 15: Click on personal sign out button
  const personalSignOutButton = "//span[text()='Sign Out']";
  await page.locator(personalSignOutButton).click();

  // Step 16: Verify URL contains /guesthome.jsp
  //expect(page.url()).toContain('/guesthome.jsp');
});