const{test, request, expect} = require('@playwright/test');
const{Utility} = require('./utils/Utility.js');

const payload = {
    userEmail: "architkmr0@gmail.com",
    userPassword: "Password@123"
};

const createOrderPayload = {
    orders: [
        {
            country: "India",
            productOrderedId: "6960ea76c941646b7a8b3dd5"
        }
    ]
}
let token;
let orderId;

test('EndtoEnd', async({page})=>{
    const myContext = await request.newContext();
 
     const utility = new Utility(myContext,payload);
    const token =  await utility.myToken();
    
    await page.addInitScript(value => {
        window.localStorage.setItem('token',value);
    },token);

 //creating order
    const orderId = await utility.createOrder(createOrderPayload);

    await page.goto('https://rahulshettyacademy.com/client/');
  await page.getByText('ORDERS').click();
    await page.locator('table.table').waitFor();
  const orders = await page.locator('table.table tbody tr th').allTextContents();
    //const  count = await orders.count();
  //console.log(orders);
  for(let i=0;i<orders.length;i++){
    if(orders[i]===orderId) {
        console.log(true);
        break;
    }
    
   }
 // await page.pause();

})