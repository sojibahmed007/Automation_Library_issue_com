
import { test, expect } from '@playwright/test';

test.describe('Videos Tab Automation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://sojibahmed.communitycdn.net/feeds');
  });

  test('TC-PR-001: Videos tab is displayed', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: 'Videos', exact: true })
    ).toBeVisible();
  });

  test('TC-PR-002: Videos tab navigation works', async ({ page }) => {
    await page.getByRole('link', { name: 'Videos', exact: true }).click();

    await expect(page).toHaveURL(/\/videos$/);
    await expect(
      page.getByRole('heading', { name: 'Videos', level: 1 })
    ).toBeVisible();
  });

  test('TC-PR-003: Empty state is displayed when there are no videos', async ({ page }) => {
    await page.getByRole('link', { name: 'Videos', exact: true }).click();

    await expect(
      page.getByRole('heading', { name: 'No videos yet' })
    ).toBeVisible();
  });

  test('TC-PR-006: Videos tab remains available after refresh', async ({ page }) => {
    await page.getByRole('link', { name: 'Videos', exact: true }).click();
    await page.reload();

    await expect(
      page.getByRole('heading', { name: 'Videos', level: 1 })
    ).toBeVisible();
  });
});