addEventListener("DOMContentLoaded", async(e)=>
{
    let data = await (await fetch("data.json")).json
    
    document.querySelector(".logo").insertAdjacentHTML("afterbegin", data.nombre);
    document.querySelector(".navbar").insertAdjacentHTML("afterbegin", /*html*/`        
        <a href="${data.menu[0].link}" class="active">${data.menu[0].nombre}</a>
        <a href="${data.menu[1].link}">${data.menu[1].nombre}</a>
        <a href="${data.menu[2].link}">${data.menu[2].nombre}</a>
        <a href="${data.menu[3].link}">${data.menu[3].nombre}</a>
        <a href="${data.menu[4].link}">${data.menu[4].nombre}</a>
        `);
})