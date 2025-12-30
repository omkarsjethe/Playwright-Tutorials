import {test,page,expect} from '@playwright/test';
test("Assertions Demo", async({page}) =>{
    await page.goto("https://demo.nopcommerce.com/register");
    await page.pause();
    // await expect(page).toHaveURL("https://demo.nopcommerce.com/register"); // URL Assertion
    await expect(page).toHaveTitle("nopCommerce demo store. Register"); // Title Assertion
    await expect(page.locator("//img[@alt='nopCommerce demo store']")).toBeVisible(); // Visible Assertion on locator 
    await expect(page.locator("section:nth-child(4) h2:nth-child(1)")).toBeVisible(); // Visible Assertion on locator
    await expect(page.locator("button[class='button-1 search-box-button']")).toBeVisible(); // Visible Assertion on locator
    await expect (page.locator("#small-searchterms")).toBeVisible(); // Visible Assertion on locator
    const maleRadioButton =await page.locator("#gender-male") // Checked Assertion on CheckBox
    await maleRadioButton.click();
    await expect(maleRadioButton).toBeChecked(); // Checked Assertion on CheckBox

    const newslettercheckbox = await page.locator("#NewsLetterSubscriptions_0__IsActive") // Unchecked Assertion on CheckBox
    await expect(newslettercheckbox).toBeChecked(); // Unchecked Assertion on CheckBox

    const registerbutton =await page.locator("#register-button");
    await expect(registerbutton).toHaveAttribute("type","submit"); // Attribute Assertion

    const texthaving = await page.locator("div[class='page-title'] h1");
    await expect(texthaving).toHaveText("Register"); // Text Assertion

    const contain = await page.locator("div[class='page-title'] h1");
    await expect(contain).toContainText("Reg"); // Text Contain Assertion

    const valuecheck = await page.locator("#FirstName");
    await valuecheck.fill("Admin");
    await expect(valuecheck).toHaveValue("Admin"); // Value Assertion

    const countcheck = await page.locator("#Company");
    await expect(countcheck).toHaveCount(1); // Count Assertion
    
})    