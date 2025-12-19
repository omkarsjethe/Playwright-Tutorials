const { test, expect } = require('@playwright/test');

test('Homepage', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');

  const pageTitle = await page.title();
  console.log("Page Title is:", pageTitle);

  // ✅ Correct assertion
  await expect(page).toHaveTitle("STORE");

  // ✅ URL assertion BEFORE closing page
  await expect(page).toHaveURL("https://demoblaze.com/index.html");

  await page.close();
});
