const fetch = require("node-fetch2");

it("Should get /luke page",async ()=>{

    const response = await fetch('http://localhost:3000/luke');

    const name = await response.text();
    console.log("get/ "+name);
    
    expect(name).toBe("Luke");


})