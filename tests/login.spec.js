const { test, expect } = require('@playwright/test');

test.describe('Suíte de Login - SauceDemo', () => {

  test('login com usuário válido', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('login com usuário inválido', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('usuario_invalido');
    await page.locator('[data-test="password"]').fill('senha_invalida');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]'))
      .toContainText('Username and password do not match');
  });

  test('login com usuário bloqueado', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]'))
      .toContainText('Sorry, this user has been locked out');
  });

  test('login sem preencher usuário', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]'))
      .toContainText('Username is required');
  });

  test('login sem preencher senha', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]'))
      .toContainText('Password is required');
  });

});
