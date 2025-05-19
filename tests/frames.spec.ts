import {test} from '@playwright/test'

test("frames test", async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    
const framePage = page.frameLocator("#courses-iframe");

const links = framePage.locator("li a[href*='lifetime-access']");
const count = await links.count();

for (let i = 0; i < count; i++) {
  const link = links.nth(i);
  if (await link.isVisible()) {
    const text = await link.textContent();
    console.log(`Clicking visible link: ${text}`);
    await link.click();
    break; // Stop after clicking the first visible match
  }
}


})