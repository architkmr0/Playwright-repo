const {test, expect} = require('@playwright/test');
//const { Facebooklogin } = require('./PageObjects/Facebooklogin');
const { POManager } = require('./PageObjects/POManager');
const testdata = JSON.parse(JSON.stringify(require('./utils/testdata.json')));
const {custombase} = require('./utils/datacustomfixture');


// for(const data of testdata){
// test(`Facebook Login ${data.username}`, async ({page})=>{
    
//     const poManager = new POManager(page);
//     //const facebooklogin = new Facebooklogin(page);
//     const fblogin = await poManager.getFacebooklogin();
//     await fblogin.gotoURL('https://www.facebook.com');
//     await fblogin.loginToFacebook(data.username,data.password);
//     await expect(page).toHaveTitle('Facebook');
//     //await page.pause();

// });
// }

custombase.only("Facebook 2 test", async ({page, datafixture})=>{
    const poManager = new POManager(page);
    //const facebooklogin = new Facebooklogin(page);
    const fblogin = await poManager.getFacebooklogin();
    await fblogin.gotoURL('https://www.facebook.com');
    await fblogin.loginToFacebook(datafixture.username, datafixture.password);
    await expect(page).toHaveTitle('facebook');
})