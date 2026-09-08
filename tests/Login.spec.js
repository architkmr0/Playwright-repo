const{test,expect} = require('@playwright/test');

let webContext;
const fakePayLoadOrders = { data: [], message: "No Orders" };

test.beforeAll(async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.getByPlaceholder('email@example.com').fill("architkmr0@gmail.com");
    await page.getByPlaceholder('enter your passsword').fill("Password@123");
    await page.getByText('Login').click();
    await page.waitForLoadState('networkidle');
   // await page.pause();
    await context.storageState({path: 'login.json'});
    webContext = await browser.newContext({storageState:'login.json'});
})

// test('login test', async ()=> {
//   const page =   await webContext.newPage();
//   await page.goto('https://rahulshettyacademy.com/client/');
//   await page.waitForLoadState('networkidle');
//   const title = await page.title();
//   console.log(title);
 

//   page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6a74890385b8849b4932871d",
//     async route=>{
//      const response=  await page.request.fetch(route.request());
//       const body = JSON.stringify(fakePayLoadOrders);
//       route.fulfill(
//         {
//           response,
//           body,
//         }
//       );

//     }
//   );

//   await page.locator('button[routerlink="/dashboard/myorders"]').click();
//   await page.waitForResponse('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6a74890385b8849b4932871d');
//   //await page.pause(); 
//   await expect(page.locator('.mt-4')).toHaveText(" You have No Orders to show at this time. Please Visit Back Us ");

// })

test('request route', async ({})=>{
  const page = await webContext.newPage();
  //await page.route('**/*.{jpg,jpeg}' ,route=> route.abort());
    
  await page.goto("https://rahulshettyacademy.com/client");
  await page.pause();
  await page.locator('button[routerlink="/dashboard/myorders"]').click();
 
  await page.route("**/order-details/6a82cdbf21054ba465da117f", 
    route => route.continue({url:'https://rahulshettyacademy.com/client/dashboard/order-details/6a82cdbf'})
  );
  
  //await page.locator('button:has-text("View")').first().click();
  
})

