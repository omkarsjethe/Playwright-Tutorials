import {test,expect} from "@playwright/test";

test("Scrollbar Handling",async({page}) => {});
    await page.goto("https://www.amazon.in/");
    await page.pause();
    await page.evaluate(() => {
        window.scrollBy(0,document.body.scrollHeight);
    });
    await page.waitForTimeout(3000);