import { test, expect } from '@playwright/test';

test('Thêm mới 100 todo item và xóa các item lẻ', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Vào bài học 3
  await page.locator("//a[text()='Bài học 3: Todo page']").click();

  const input = page.locator("//input[@placeholder='Enter a new task']");

  // Thêm 100 todo
  for (let i = 1; i <= 100; i++) {
    await input.fill(`Todo ${i}`);
    await input.press('Enter');
  }

  // Xóa các todo số lẻ (1, 3, 5, ..., 99)
  const todos = page.locator("//li");

  for (let i = 1; i <= 100; i += 2) {
  const item = todos.filter({ hasText: `Todo ${i}` });

  if (await item.count()) {
    await item.locator("button").click();
  }
}

});