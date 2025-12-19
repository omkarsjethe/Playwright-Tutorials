const {test,expect}= require("@playwright/test");

test("Homepage",async({page}) => {

    await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=17705040255178513390&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9180531&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1")
    
    const pagetitle= page.title();
    console.log("Page titleis ",await pagetitle);

    await page.close ();
})