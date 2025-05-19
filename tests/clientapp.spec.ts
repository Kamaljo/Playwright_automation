// import {expect, test } from '@playwright/test'
// import { Console } from 'console';

// // test ( 'create a account for new user', async ({browser}) =>
// // {

// // const context = await browser.newContext();
// // const page = await context.newPage();

// // const registerpage = page.locator('.text-reset');
// // const firstname = page. locator('#firstName');
// // const lastname = page. locator('#lastName');
// // const email = page. locator('#userEmail');
// // const mobile = page. locator('#userMobile');
// // const occupation = page.locator('[formcontrolname="occupation"]');
// // const gender = page. locator('[value="Male"]');
// // const userPassword = page. locator('#userPassword');
// // const confirmPassword = page. locator('#confirmPassword');
// // const consentcheckbox =page.locator('[type="checkbox"]');
// // const register =page.locator('[value="Register"]');


// // await page.goto("https://rahulshettyacademy.com/client/");
// // await registerpage.click();
// // await firstname.fill("Kunal");
// // await lastname.fill("sharma");
// // await email.fill("testing1123@mailinator.com");
// // await mobile.fill("1234567890");
// // await occupation.selectOption("Engineer");
// // await gender.click();
// // await userPassword.fill("Aa@123456");
// // await confirmPassword.fill("Aa@123456");
// // await consentcheckbox.click();
// // await register.click();



// // }


// // )

// test( 'test for login use', async ({page}) =>

//     {

//    const email = page.locator('#userEmail');
//    const password = page. locator("#userPassword");
//    const  loginbutton = page.locator("#login");
//    const product = page.locator(".card-body");
//    const cartbutton = page.locator("[routerlink*= 'cart']");
//    const productname = "ADIDAS ORIGINAL";
//    const cartproduct = page.locator('.infoWrap');
//    const verifyemail = page.locator("label[type='text']");
//    const cvv = page.locator('.small .txt');
//    const name = page.locator("(//input[@class='input txt'])[2]");  
//    const coupoan = page.locator("//input[@name='coupon']");
//    const country = page.locator("//input[@placeholder='Select Country']");
//    const countydrodown = page.locator('.ta-results');
//    const placeorder = page.locator('.action__submit');
//    const orderid = page.locator('label.ng-star-inserted');
//    const orderhistorybuttoon = page.locator("label[routerlink*='myorders']");
//    const orderhistorypagetable = page.locator('.table-hover [scope="row"]');

//    await page.goto("https://rahulshettyacademy.com/client/");
//    await email.fill("testing1123@mailinator.com");
//    await password.fill("Aa@123456");
//    await loginbutton.click();
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

// for( let i =0 ; i< countydropdowncount; i++ )y
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
// await orderhistorybuttoon.click();


// await orderhistorypagetable.last().waitFor();
// const orderhistorycount = await orderhistorypagetable.count();

// console.log(orderhistorycount);

// for(let i = 0 ; i< orderhistorycount ; i++)
// {
//    console.log(await orderhistorypagetable.nth(i).textContent());
//   if( await orderhistorypagetable.nth(i).textContent() === orderidfinal)
//   {
// await expect(orderhistorypagetable.nth(i)).toHaveText(orderidfinal);
// break;
   
//   }
//   else
//   {
//    console.log("no id found");
//   }

// }








//     }

// )