import { expect, test } from '@playwright/test';


test ( 'test to validate the error message in login page',async ({browser}) =>
    {
    

    const context = await browser.newContext();
    const page = await context.newPage();
    const username = page.locator("#username");
    const password = page.locator("#password");
    const login = page.locator("#signInBtn");
    const errormsg = page.locator("[style *='block']");
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await username.fill("kamal");   
    await password.fill("121321"); 
    await login.click();    
    await expect(errormsg).toContainText("Incorrect username/password.");



    // await expect(page).toHaveTitle("Google");
    
    
    })

    test ( 'test to login sucessfully',async ({browser}) =>
        {
        
    
        const context = await browser.newContext();
        const page = await context.newPage();
        const username = page.locator("#username");
        const password = page.locator("#password");
        const login = page.locator("#signInBtn");
        const errormsg = page.locator("[style *='block']");
        // const verifyloginpage = page.locator("a.navbar-brand",{ hasText: 'ProtoCommerce Home' });
        const verifyloginpage = page.locator("a.navbar-brand");
        const iteminpage = page.locator(".card-body a");
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        await username.fill("rahulshettyacademy");   
        await password.fill("learning"); 
        await login.click();  
        // await expect(verifyloginpage.nth(1)).toHaveText("ProtoCommerce Home");
        console.log(await iteminpage.allTextContents());   
    
    
    
        // await expect(page).toHaveTitle("Google");
        
        
        })

        test ( 'UI Controls',async ({browser}) =>
            {
            
        
            const context = await browser.newContext();
            const page = await context.newPage();
            const username = page.locator("#username");
            const password = page.locator("#password");
            const dropdown = page.locator('select.form-control');
            const radiobut = page.locator("[value = 'user']");
            const okbutton = page.locator("#okayBtn");
            const blintext = page.locator("[href *= 'documents-request']");
            const login = page.locator("#signInBtn");
            // const verifyloginpage = page.locator("a.navbar-brand",{ hasText: 'ProtoCommerce Home' });
            const verifyloginpage = page.locator("a.navbar-brand");
            const iteminpage = page.locator(".card-body a");
            await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
            await expect(blintext).toHaveAttribute("class", "blinkingText");
            await username.fill("rahulshettyacademy");   
            await password.fill("learning"); 
            await dropdown.selectOption("consult");
            await radiobut.click();
            await okbutton.click();
            await login.click();  
            await expect(verifyloginpage.nth(1)).toHaveText("ProtoCommerce Home");


             
            // console.log(await iteminpage.allTextContents());   
    
        
            // await expect(page).toHaveTitle("Google");
            
            
            })

            test( 'chile window handle',async ({browser}) =>
                {
                
            
                const context = await browser.newContext();
                const page = await context.newPage();



                await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

                const blintext = page.locator("[href *= 'documents-request']");

                await expect(blintext).toHaveAttribute("class", "blinkingText");

              const [ newpage ]   = await Promise.all
              (
               [  
                context.waitForEvent('page'),
                blintext.click(),

               ]
             )

             const testing = await newpage.title();
             console.log(testing);
             const redText = await newpage.locator('.red').first().textContent();
             console.log(redText);

             page.pause();


               
    
    
                 
                // console.log(await iteminpage.allTextContents());   
        
            
                // await expect(page).toHaveTitle("Google");
                
                
                })

                test ('test', async ({ page }) => {
                    await page.goto('https://frontline.test.simpplr.xyz/login');
                    await page.getByRole('textbox', { name: 'Email' }).click();
                    await page.getByRole('textbox', { name: 'Email' }).fill('anagh.desai@simpplr.com');
                    await page.getByRole('button', { name: 'Continue' }).click();
                    await page.getByRole('textbox', { name: 'Password' }).click();
                    await page.getByRole('textbox', { name: 'Password' }).fill('Simp@123');
                    await page.getByRole('button', { name: 'Sign in' }).click();
                    await page.getByRole('button', { name: 'Profile settings' }).click();

// Hover over the "Manage" menu to reveal the submenu
// Hover to trigger submenu
// Hover the parent menu to reveal the submenu
// Hover the parent menu to reveal the submenu
await page.getByRole('menuitem', { name: 'Manage' }).hover();

// Locate the submenu item
 await page.locator('.DropdownMenu-module__DropdownMenuItemLabel__2Wx1u').nth(18).click();

                    
                    
                    // Then click on "Manage"
                    
                    
                   
                    await page.getByRole('heading', { name: 'QR codes added' }).click();
                    await page.getByText('Add QR').click();
                    await page.getByRole('menuitem', { name: 'Content' }).click();
                  });