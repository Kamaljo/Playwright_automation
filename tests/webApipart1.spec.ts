import { test,request, expect } from '@playwright/test'
import { ApiUtils } from './utils/ApiUtils';

const loginpaylod =  { userEmail: "testing1123@mailinator.com", userPassword: "Aa@123456"}
const orderidpayload =
   {orders: [{country: "India", productOrderedId: "67a8df1ac0d3e6622a297ccb"}]}

 let token: any;
 let orderid: any;
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
//    await product.first().waitFor();
//    const numberofitem = await product.count();
//   for( let i = 0; i< numberofitem; i++)
//   {
//      if (await product.nth(i).locator('b').textContent() === productname)
//      {
//       await page.waitForTimeout(6000);
//         await product.nth(i).locator("text =  Add To Cart").click();
//         //await page.waitForTimeout(60000);
//         break;

//      }



//   }

//   await page.waitForTimeout(6000);
//   await cartbutton.click();

//   const cartcount = await cartproduct.count();

// await page.locator(".infoWrap").waitFor();

// const textcheck =await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
// expect(textcheck).toBeTruthy();

// await page.locator("text = Checkout").click();

// await expect(verifyemail).toHaveText("testing1123@mailinator.com")

// await cvv.nth(1).fill('666');
// await name.fill("dsfsc");
// await coupoan.fill("xyz");
// await country.pressSequentially("ind");

// await countydrodown.waitFor();

// //const countydropdowncount = countydrodown.locator('[type=', button, ']')

// const countydropdowncount = await countydrodown.locator( '[type="button"]').count();

// console.log(await countydrodown.textContent() );

// console.log("county count" +   countydropdowncount);

// for( let i =0 ; i< countydropdowncount; i++ )
// {

//    console.log(await countydrodown.locator( '[type="button"]').nth(i).textContent());

//    if(await countydrodown.locator( '[type="button"]').nth(i).textContent() === ' India')
//    {
//       await countydrodown.locator( '[type="button"]').nth(i).click();
//       break;

//    }

// }


// await placeorder.click();

// const orderidpage = await orderid.textContent()
// const orderidfinal =orderidpage?.replace(/\|/g, '').trim();

// console.log(orderidfinal);
await orderhistorybuttoon.click();


await orderhistorypagetable.last().waitFor();
const orderhistorycount = await orderhistorypagetable.count();

console.log(orderhistorycount);

for(let i = 0 ; i< orderhistorycount ; i++)
{
   console.log(await orderhistorypagetable.nth(i).textContent());
  if( await orderhistorypagetable.nth(i).textContent() === orderid)
  {
await expect(orderhistorypagetable.nth(i)).toHaveText(orderid);
break;
   
  }
  else
  {
   console.log("no id found");
  }

}








    }

)
