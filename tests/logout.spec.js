const { test, expect } = require('@playwright/test');

test.describe('Suíte de Logout - SauceDemo', () => {

  test('realizar logout com sucesso', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();

    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

});
