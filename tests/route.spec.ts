import { test,request, expect } from '@playwright/test'
import { ApiUtils } from './utils/ApiUtils';

const loginpaylod =  { userEmail: "testing1123@mailinator.com", userPassword: "Aa@123456"}
const orderidpayload =
   {orders: [{country: "India", productOrderedId: "67a8df1ac0d3e6622a297ccb"}]}

 let token: any;
 let orderid: any;
 let fakepaylodresponse :any = {data:[],message :"No Orders"}
test.beforeAll( async()=> 
{

  
const webapicontext = await request.newContext();
const  apiutils   = new ApiUtils(webapicontext, loginpaylod);
token = await apiutils.gettoken();
const orderid = await apiutils.getorderid(orderidpayload);

console.log("token" + token);


}


)

 

test( 'test for login use', async ({page}) =>

    {


   const email = page.locator('#userEmail');
   const password = page. locator("#userPassword");
   const  loginbutton = page.locator("#login");
   const product = page.locator(".card-body");
   const cartbutton = page.locator("[routerlink*= 'cart']");
   const productname = "ADIDAS ORIGINAL";
   const cartproduct = page.locator('.infoWrap');
   const verifyemail = page.locator("label[type='text']");
   const cvv = page.locator('.small .txt');
   const name = page.locator("(//input[@class='input txt'])[2]");  
   const coupoan = page.locator("//input[@name='coupon']");
   const country = page.locator("//input[@placeholder='Select Country']");
   const countydrodown = page.locator('.ta-results');
   const placeorder = page.locator('.action__submit');
  // const orderid = page.locator('label.ng-star-inserted');
   const orderhistorybuttoon = page.locator("button[routerlink*='myorders']");
   const orderhistorypagetable = page.locator('.table-hover [scope="row"]');

   
page.addInitScript((token)=>
{
   window.localStorage.setItem('token',token);

}, token

);

await page.goto("https://rahulshettyacademy.com/client");


await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/681b2baffd2af1c99e13433e",
   async route=>
   {

      const response = await page.request.fetch(route.request())
      let body = JSON.stringify(fakepaylodresponse);
      route.fulfill (
         {

         response,
         body,

      })

   }


)
await orderhistorybuttoon.click();
await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/681b2baffd2af1c99e13433e");


console.log("blank cart page msg " +   await page.locator(".mt-4").textContent());

}



)
