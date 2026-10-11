
import { test, expect } from '@playwright/test';

test.describe('Feed page verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://sojibahmed.communitycdn.net/feeds');
  });

  test('TC-PR-001: feed loads and shows the login prompt', async ({ page }) => {
    await expect(page.getByText('Log in to see your feed')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Log in' }).first()).toBeVisible();
  });

  test('TC-PR-002: public feed includes the Videos section text', async ({ page }) => {
    await expect(page.getByText('Videos', { exact: true }).first()).toBeVisible();
  });

  test('TC-PR-003: feed remains stable after reload', async ({ page }) => {
    await expect(page.getByText('Log in to see your feed')).toBeVisible();
    await page.reload();
    await expect(page.getByText('Log in to see your feed')).toBeVisible();
  });

  test('TC-PR-004: page remains usable on a mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    await expect(page.getByText('Log in to see your feed')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Log in' }).first()).toBeVisible();
  });
});
