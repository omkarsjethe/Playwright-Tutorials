const{test, expect} =require("@playwright/test");

test("Locators Demo",async({page})=>{

    await page.goto("https://www.demoblaze.com/");
    const pagetitle= page.title();
    console.log("Page title is ",await pagetitle);  // to know the Tile od the page 

    await page.locator("id=login2").click();
    await page.fill("#loginusername", "omkarjethe");   // click on any element using locator
    await page.fill("input[id ='loginpassword']", "omkar123");   // click on any element using locator
    await page.click("//button[normalize-space()='Log in']");  
    const logoutlink =await page.locator("//a[@id='logout2']") // click on any element using locator
    await expect(logoutlink).toBeVisible();

    await page.close();
})