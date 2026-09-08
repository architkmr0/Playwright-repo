const base = require('@playwright/test');

exports.customtest = base.test.extend(
    {
        customefixture : async({browser}, use)=>{
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto("https://google.com");
            console.log("pass 1");
            await use(page);
        }
    }
)