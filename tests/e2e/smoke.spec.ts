import { test, expect } from '@playwright/test';

test('homepage smoke', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('A movement shaping Afrikan women');
});
