class Utility{

     token;

    constructor(myContext, payload){
        this.myContext = myContext;
        this.payload = payload;
    }

   async myToken(){
        //console.log(payload)
        const response = await this.myContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
            data:this.payload
    });
    //await expect(response.ok()).toBeTruthy();
    const responsejson = await response.json();
    const token = responsejson.token;
    return token;
 }

 async createOrder(createOrderPayload){
     const orderResonse =  await myContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order', {
        data: createOrderPayload,
        headers:{
            'Authorization':this.myToken(),
            'Content-Type':'application/json'
        },
    }
    );
   const orderJson =  await orderResonse.json();
 // console.log(orderJson);
  const orderId =  orderJson.orders;
  console.log("order id = "+orderId);
  return orderId;
 }

}

module.exports = {Utility};