import{test,expect} from "@playwright/test";
test("Tag test Demo 1@sanity", async({page}) =>{   
    console.log("Tag test Demo 1");
});

test("Tag test Demo 2@sanity", async({page}) =>{   
    console.log("Tag test Demo 2");
});         
test("Tag test Demo 3@reg", async({page}) =>{   
    console.log("Tag test Demo 3");
}
);         
test("Tag test Demo 4@reg", async({page}) =>{   
    console.log("Tag test Demo 4");
});
test("Tag test Demo 5@sanity @reg", async({page}) =>{   
    console.log("Tag test Demo 5");
});