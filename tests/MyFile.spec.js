const {test,expect, request} = require('@playwright/test');
const {customtest} = require('./utils/CustomFix.js');

customtest('first test', async ({customefixture})=>{
    await customefixture.goto('https://www.google.com');
    console.log("pass2");
});


