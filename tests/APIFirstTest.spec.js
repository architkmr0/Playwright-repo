const {test, expect, request} =  require('@playwright/test');

test('first test', async()=>{
    //creating a new context for api
    const apiContext = await request.newContext();
    //hitting the url
    const response =await apiContext.get("https://api.restful-api.dev/objects");
    //getting response in json format
    const responsejson = await response.json();
    //reading json and getting object value
    const name = await responsejson[0].name;
    await console.log(name);
})

test('second test', async()=>{
    const myContext = await request.newContext();
    const response = await myContext.get('https://api.restful-api.dev/objects/7');
    await console.log(response.ok());
    // ok method checks if response is in series of 200 or not
    await expect(response.ok()).toBeTruthy();
    const jsonresponse =await response.json();
    console.log(await jsonresponse.data.year);

})


