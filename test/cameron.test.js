const fetch = require("node-fetch2");

it("Should get /cameron page",async ()=>{
    const response = await fetch('http://localhost:3000/cameron');
    const name = await response.text();
    console.log("get/ "+name);
    
    expect(name).toBe("Hello Cameron");
})