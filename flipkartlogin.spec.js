import { test, expect } from '@playwright/test';

test('Flipkart login popup validation (stable)', async ({ page }) => {

  await page.goto('https://www.flipkart.com', {
    waitUntil: 'domcontentloaded'
  });

  // 🔹 Wait for login modal container
  const loginModal = page.locator('div').filter({
    hasText: 'Login'
  }).first();

  await expect(loginModal).toBeVisible({ timeout: 15000 });

  // 🔹 Robust mobile/email input locator
  const mobileInput = page.locator('input[type="text"], input[type="tel"]').first();

  await expect(mobileInput).toBeVisible({ timeout: 15000 });

  await mobileInput.fill('9999999999');
  await expect(mobileInput).toHaveValue('9999999999');

  // 🔹 Request OTP button
  const requestOtpBtn = page.getByRole('button', { name: /request otp/i });
  await expect(requestOtpBtn).toBeEnabled();

  await requestOtpBtn.click();

  // 🔹 OTP screen validation
  await expect(
    page.getByText(/enter otp/i)
  ).toBeVisible({ timeout: 15000 });

});
