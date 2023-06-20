addEventListener("DOMContentLoaded", async(e)=>
{
    let data = await (await fetch("data.json")).json
    console.log(data);
      
})