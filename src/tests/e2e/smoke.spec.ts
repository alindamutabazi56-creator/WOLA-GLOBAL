import { test, expect } from '@playwright/test';

test('home page renders and exposes CTA', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Women Leaders of Afrika' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Join WOLA' }).first()).toBeVisible();
});
