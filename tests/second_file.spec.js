const {test, expect} = require('@playwright/test');

test('second test', async function({page}){
    await page.goto("https://salesdemoqa.insights-qa.devqafms.com");
    const title =await page.title();
    await console.log(title);
   // await expect(page).toHaveTitle("Google");
   await page.getByRole('button').click();
    await page.locator('#Username').fill("salesdemo-qa-user-0@fmdemo.com");
   await  page.locator('#Password').fill("1q2w3e4r%T");
   await page.locator('button[name="buttonName"]').click();
   //const title1 = await page.title();
   //await  console.log(title1);
   const title2 = await page.locator('h1').allInnerTextstextContent();
   await console.log(title2);
   await expect(page.locator('h1')).toContainText("Home");
    // await expect(page.locator('h1')).t
})