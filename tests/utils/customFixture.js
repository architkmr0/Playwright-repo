const custom1 = require('@playwright/test');

exports.customtest = custom1.test.extend({
    loginfixture: async ({page}, use) => {
       await  page.goto("https://www.rahulshettyacademy.com");
        console.log("custom fixture executed");
        await use(page);
    }
});