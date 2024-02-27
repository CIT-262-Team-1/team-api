const fetch = require("node-fetch2");

it("Should get /waheed page",async ()=>{

    const response = await fetch('http://localhost:3000/waheed');

    const name = await response.text();
    console.log("get/ "+name);
    
    expect(name).toBe("Hello Waheed");


})