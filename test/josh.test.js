const fetch = require("node-fetch2");

it("Should get /josh page",async ()=>{

    const response = await fetch('http://localhost:3000/josh');

    const name = await response.text();
    console.log("get/ "+name);
    
    expect(name).toBe("Josh");


})