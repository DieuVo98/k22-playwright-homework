import { test } from '@playwright/test';

test('Test 1: Điền vào trang register page', async ({ page }) => {
    //Step 1: Mở website
    await test.step('  Step 1: Mở website', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    //Step 2: Click vào Bài học 1: Register Page (có đủ các element)
    await test.step('Step2: Click vào Bài học 1: Register Page (có đủ các element)', async () => {
        await page.click('text=Bài học 1: Register Page (có đủ các element)');
    });

    //Step 3: Điền thông tin Username, Email, Gender, Hobbies, Interests, Country, Date of Birth, Profile Picture, Biography
    await test.step('Step 3: Điền thông tin Username, Email, Gender, Hobbies, Interests, Country, Date of Birth, Profile Picture, Biography', async () => {
        // Username
        await page.locator("//input[@id='username']").fill("Dieu Vo");

        // Email
        await page.locator("//input[@id='email']").fill("dieuvo@gmail.com");

        // Gender
        await page.locator("//input[@value='female']").check();

        // Hobbies
        await page.locator("//input[@value='traveling']").check();

        // Interests
        await page.locator("//select[@id='interests']").selectOption([
            { label: 'Music' },
            { label: 'Sports' }
        ]);

        // Country
        await page.locator("//select[@id='country']").selectOption({ label: 'Canada' });

        // Date of Birth
        await page.locator("//input[@id='dob']").fill("1998-09-19");

        // Upload file
        await page.locator("//input[@id='profile']").setInputFiles('tests/lesson-05/profile.png');

        // Biography
        await page.locator("//textarea[@id='bio']").fill("This is my bio");
    });

    //Step 4: Click button Register
    await test.step('Step4: Click button Register', async () => {
        await page.locator("//button[text()='Register']").click();
    });
});