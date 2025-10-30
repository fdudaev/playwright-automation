import { test } from "@playwright/test";

test("", async ({ page }) => {
  // navigate to https://xploreqa.ieee.org/Xplore/home.jsp
  await page.goto("https://xploreqa.ieee.org/Xplore/home.jsp");
  // wait for the page to load completely
  await page.waitForLoadState(3000);

});
