// {test, expect} = require('@playwright/test');
import {test,expect} from '@playwright/test';
//const { Facebooklogin } = require('./PageObjects/Facebooklogin');
import {Facebooklogin} from './PageObjects copy/Facebooklogin';
//const { POManager } = require('./PageObjects/POManager');
import {POManager} from './PageObjects copy/POManager';
const testdata = JSON.parse(JSON.stringify(require('./utils/testdata.json')));
//const {custombase} = require('./utils/datacustomfixture');
import {custombase} from './utils/datacustomfixture1';



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

custombase.only("Facebook 2 test", async ({page : Page, datafixture : {username, password}})=>{
  
    const poManager = new POManager(Page);
    //const facebooklogin = new Facebooklogin(page);
    const fblogin = await poManager.getFacebooklogin();
    await fblogin.gotoURL('https://www.facebook.com');
    await fblogin.loginToFacebook(username, password);
    await expect(Page).toHaveTitle('facebook');
})