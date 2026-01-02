import {test,expect} from "@playwright/test";

test("Annotation Demo",async({page}) => {
    console.log("This is annotation demo");
});

test("Annotation Demo 2",async({page}) => {        //Only annotation c
    console.log("This is annotation demo 2");
});
test.skip("Annotation Demo 3",async({page}) => {        //Skip annotation
    console.log("This is annotation demo 3");
});

test("Annotation Demo 4",async({page,browserName}) => {
    console.log("This is annotation demo 4");
    if(browserName==='chromium')
    {
        test.skip();
    }
});
test("Annotation Demo 5",async({page,browserName}) => {
    test.fixme();                                       //Fixme annotation
    console.log("This is annotation demo 5");
});

test("Annotation Demo 6",async({page}) => {      //fail annotation
    test.fail();
    console.log("This is annotation demo 6");
    expect(1).toBe(2);
});

test("Annotation Demo 7",async({page}) => {      //timeout annotation
    test.slow();
    console.log("This is annotation demo 7");
    page.goto("https://www.amazon.in/");
})