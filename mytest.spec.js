import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').click();
  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').click();
  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').fill('9987371729');
  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').press('Enter');
  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('3');
  await page.getByRole('textbox').nth(2).fill('7');
  await page.getByRole('textbox').nth(3).fill('7');
  await page.getByRole('textbox').nth(4).fill('4');
  await page.getByRole('textbox').nth(5).fill('9');
  await page.locator('div:nth-child(6) > .c3Bd2c').fill('3');
  await page.locator('#product-0').getByRole('link', { name: 'Image' }).click();
  await page.getByRole('link', { name: 'Logout Logout' }).click();
});