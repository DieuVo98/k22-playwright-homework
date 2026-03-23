import { test, expect } from '@playwright/test';

test('Add notes and search (XPath)', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Vào bài học 4
  await page.locator("//a[text()='Bài học 4: Personal notes']").click();

  // Data mẫu cho 10 note
  const notes = [
    { title: 'Action 1', content: 'Mô tả một hoặc nhiều' },
    { title: 'Action 2', content: 'Test nội dung khác' },
    { title: 'Action 3', content: 'Có một hoặc nhiều giá trị' },
    { title: 'Action 4', content: 'Random content' },
    { title: 'Action 5', content: 'một hoặc nhiều case' },
    { title: 'Action 6', content: 'something else' },
    { title: 'Action 7', content: 'một hoặc nhiều lần' },
    { title: 'Action 8', content: 'text demo' },
    { title: 'Action 9', content: 'example' },
    { title: 'Action 10', content: 'một hoặc nhiều test' },
  ];

  // Thêm 10 note vào hệ thống
  for (const note of notes) {
    await page.locator("//input[@id='note-title']").fill(note.title);
    await page.locator("//textarea[@id='note-content']").fill(note.content);
    await page.locator("//button[text()='Add Note']").click();
  }

  // Search với keyword "một hoặc nhiều"
  await page.locator("//input[@id='search']").fill('một hoặc nhiều');

  // Verify có kết quả
  expect(await page.locator("//ul[@id='notes-list']").count()).toBeGreaterThan(0);
});