const {test, expect} = require('@Playwright/test');

test('Practice', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator('p.login-wrapper-footer-text').click();
    await page.locator('input#firstName').fill("Archit");
    await page.locator('input#lastName').fill("Kumar");
    await page.locator('input#userEmail').fill("architkmr0@gmail.com");
    await page.getByPlaceholder('enter your number').fill("9514521452");
    //await page.locator("select[class*='custom-select']").click();
    await page.locator("select[class*='custom-select']").selectOption("Doctor");
    await page.locator('input[value="Male"]').click();
    await page.locator('input#userPassword').fill("Password@123");
    await page.locator('input#confirmPassword').fill("Password@123");
    await page.locator("input[type='checkbox']").click();
    await page.locator("input#login").click()
    await page.pause();

    await page.locator("input#userEmail").fill("architkmr0@gmail.com");
    await page.locator("input#userPassword").fill("Password@123");
    await page.locator("input#login").click()
    const title = await page.locator("div[class='card'] b").first().textContent();
    await console.log(title);


}

);