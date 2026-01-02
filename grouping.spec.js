import {test,expect} from '@playwright/test';

test.beforeAll(async() => {
    console.log("This is before all tests");
})

test.afterAll(async() => {
    console.log("This is after all tests");
})

test.beforeEach(async() => {
    console.log("This is before each test");
})

test.afterEach(async() => {
    console.log("This is after each test");
})

test.describe("Group1",() => {
test("grouping Demo", async({page}) =>{   
    console.log("Grouping Demo Test Case Executed");
});
test("grouping Demo 2", async({page}) =>{   
    console.log("Grouping Demo Test Case 2 Executed");
});    
})
test.describe("Group2",() => {
test("grouping Demo 3", async({page}) =>{   
    console.log("Grouping Demo Test Case 3 Executed");
});
test("grouping Demo 4", async({page}) =>{   
    console.log("Grouping Demo Test Case 4 Executed");
});
})

test("grouping Demo 5", async({page}) =>{   
    console.log("Grouping Demo Test Case 5 Executed");
});