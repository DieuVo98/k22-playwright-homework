import { test, expect } from '@playwright/test';

test('Add products to cart with XPath', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Vào bài học 2
  await page.locator("//a[text()='Bài học 2: Product page']").click();

  // Thêm vào giỏ hàng sản phẩm 1: 2 sản phẩm
  const product1 = page.locator("(//div[@class='product'])[1]");
  await product1.locator("//button[text()='Add to Cart']").click();
  await product1.locator("//button[text()='Add to Cart']").click();

  // Thêm vào giỏ hàng sản phẩm 2: 3 sản phẩm
  const product2 = page.locator("(//div[@class='product'])[2]");
  for (let i = 0; i < 3; i++) {
    await product2.locator("//button[text()='Add to Cart']").click();
  }

  // Thêm vào giỏ hàng sản phẩm 3: 1 sản phẩm
  const product3 = page.locator("(//div[@class='product'])[3]");
  await product3.locator("//button[text()='Add to Cart']").click();

});