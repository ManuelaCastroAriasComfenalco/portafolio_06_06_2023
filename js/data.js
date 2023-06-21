addEventListener("DOMContentLoaded", async(e)=>
{
    let data = await (await fetch("data.json")).json();
    document.querySelector(".logo").insertAdjacentHTML("afterbegin", data.home.nombre);
    document.querySelector(".navbar").insertAdjacentHTML("afterbegin", `        
        <a href="${data.home.menu[0].link}" class="active">${data.home.menu[0].nombre}</a>
        <a href="${data.home.menu[1].link}">${data.home.menu[1].nombre}</a>
        <a href="${data.home.menu[2].link}">${data.home.menu[2].nombre}</a>
        <a href="${data.home.menu[3].link}">${data.home.menu[3].nombre}</a>
        <a href="${data.home.menu[4].link}">${data.home.menu[4].nombre}</a>
        `);
        document.querySelector(".home-content").insertAdjacentHTML("afterbegin", `
            <h1>${data.home.parrafo.titulo[0]} <span>${data.home.parrafo.titulo[1]}</span><span class="animate" style="--i:2;"></span></h1>);
            <div class="text-animate">
            <h3>${data.home.parrafo.subtitulo}</h3>
                <h3>Frontend Developer</h3>
                <span class="animate" style="--i:3;"></span>
            </div>
            <p>${data.home.parrafo.descripcion}<span class="animate" style="--i:4;"></span></p>
            <div class="btn-box">
                <a href="${data.home.parrafo.botones[0].link}" class="btn">${data.home.parrafo.botones[0].nombre}</a>
                <a href="${data.home.parrafo.botones[1].link}" class="btn">${data.home.parrafo.botones[1].nombre}</a>
                <span class="animate" style="--i:5;"></span>
            </div>
        `);
        document.querySelector(".home-sci").insertAdjacentHTML("afterbegin", `
            <a href="${data.home.parrafo.redes[0].link}"><i class='${data.home.parrafo.redes[0].nombre}'></i></a>
            <a href="${data.home.parrafo.redes[1].link}"><i class='${data.home.parrafo.redes[1].nombre}'></i></a>
            <a href="${data.home.parrafo.redes[2].link}"><i class='${data.home.parrafo.redes[2].nombre}'></i></a>
        `)
        

})