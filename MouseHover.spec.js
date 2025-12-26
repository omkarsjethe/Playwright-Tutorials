const{test,expect}=require('@playwright/test');

test("Mouse hover demo", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");
  await page.waitForLoadState('networkidle');

  const desktop = page.locator("//span[contains(text(),'Fashion')]");
  const mac = page.locator("]   ");

  await desktop.waitFor({ state: 'visible' });
  await desktop.hover();
  await mac.click();
});
