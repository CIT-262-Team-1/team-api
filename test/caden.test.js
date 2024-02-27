const fetch = require("node-fetch2");

it("Should get /caden page",async ()=>{
    const response = await fetch('http://localhost:3000/caden');
    const name = await response.text();
    console.log("get/ "+name);
    
    expect(name).toBe("Hello Caden");
})