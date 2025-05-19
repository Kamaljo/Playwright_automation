import {expect, test } from '@playwright/test'

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
   const orderid = page.locator('label.ng-star-inserted');
   const orderhistorybuttoon = page.locator("label[routerlink*='myorders']");
   const orderhistorypagetable = page.locator('.table-hover [scope="row"]');

   await page.goto("https://rahulshettyacademy.com/client/");
   await email.fill("testing1123@mailinator.com");
   await password.fill("Aa@123456");
   await loginbutton.click();
   await product.first().waitFor();
   await page.locator("button[routerlink*='myorders']").click();
   await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
      route => route.continue({url : "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=68270d715d3fd9ffa0f18ac2" })

   )
   await page.locator("button:has-text('view')").first().click();
   await expect(page.locator("//p[@class='blink_me']")).toHaveText("You are not authorize to view this order");
   
   

    }

)