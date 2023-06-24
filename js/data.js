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
            <h1>${data.home.parrafo.titulo[0]} <span>${data.home.parrafo.titulo[1]}</span><span class="animate" style="--i:2;"></span></h1>
            <div class="text-animate">
            <h3>${data.home.parrafo.subtitulo}</h3>
                
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
        `);
        document.querySelector(".about").insertAdjacentHTML("afterbegin",`
            <h2 class="heading">${data.about.titulo[0]} <span>${data.about.titulo[1]}</span><span class="animate scroll" style="--i:1;"></span></h2>
        `);
        document.querySelector(".about-content").insertAdjacentHTML("afterbegin", `
            <h3>${data.about.subtitulo}<span class="animate scroll" style="--i:3;"></span></h3>
            <p>${data.about.descripcion}<span class="animate scroll" style="--i:4;"></span></p>
                <div class="btn-box btns">
                <a href="${data.about.botones.link}" class="btn">${data.about.botones.nombre}</a>
                <span class="animate scroll" style="--i:5;"></span>
                </div>
        `);
        document.querySelector(".education").insertAdjacentHTML("afterbegin", `
            <h2 class="heading">${data.Education.titulo[0]}<span>${data.Education.titulo[1]}</span><span class="animate scroll" style="--i:1;"></span></h2>
            `);
        document.querySelector("#The_Education").insertAdjacentHTML("afterbegin", `  
            <h3 class="title">${data.Education.subtitulo}<span class="animate scroll" style="--i:2;"></span></h3>

                    <div class="education-box">
                        <div class="education-content">
                            <div class="content">
                                <div class="year"><i class='bx bxs-calendar'></i>${data.Education.education[0].lapso}</div>
                                <h3>${data.Education.education[0].asociacion}</h3>
                                <p>${data.Education.education[0].descripcion}</p>
                            </div>
                        </div>

                        <div class="education-content">
                            <div class="content">
                                <div class="year"><i class='bx bxs-calendar'></i>${data.Education.education[1].lapso}</div>
                                <h3>${data.Education.education[1].asociacion}</h3>
                                <p>${data.Education.education[1].descripcion}</p>
                            </div>
                        </div>
                    

                        <div class="education-content">
                            <div class="content">
                                <div class="year"><i class='bx bxs-calendar'></i>${data.Education.education[2].lapso}</div>
                                <h3>${data.Education.education[2].asociacion}</h3>
                                <p>${data.Education.education[2].descripcion}</p>
                            </div>
                        </div>

                        <span class="animate scroll" style="--i:3;"></span>
                    </div>
        `);
        document.querySelector("#The_Experience").insertAdjacentHTML("afterbegin", `
            <h3 class="title">${data.Education.Subtitulo}<span class="animate scroll" style="--i:5;"></span></h3>

                    <div class="education-box">
                        <div class="education-content">
                            <div class="content">
                                <div class="year"><i class='bx bxs-calendar'></i>${data.Education.experience[0].lapso}</div>
                                <h3>${data.Education.experience[0].asociacion}</h3>
                                <p>${data.Education.experience[0].descripcion}</p>
                            </div>
                        </div>

                        <div class="education-content">
                            <div class="content">
                                <div class="year"><i class='bx bxs-calendar'></i>${data.Education.experience[1].lapso}</div>
                                <h3>${data.Education.experience[1].asociacion}</h3>
                                <p>${data.Education.experience[1].descripcion}</p>
                            </div>
                        </div>
                    
                        
                        <div class="education-content">
                            <div class="content">
                                <div class="year"><i class='bx bxs-calendar'></i>${data.Education.experience[2].lapso}</div>
                                <h3>${data.Education.experience[2].asociacion}</h3>
                                <p>${data.Education.experience[2].descripcion}</p>
                            </div>
                        </div>

                        <span class="animate scroll" style="--i:6;"></span>
                    </div>
        `);
        document.querySelector(".skills").insertAdjacentHTML("afterbegin", `
           <h2 class="heading">${data.skills.titulo[0]} <span>${data.skills.titulo[1]}</span><span class="animate scroll" style="--i:1;"></span></h2>  
        `);
        document.querySelector("#The_Coding").insertAdjacentHTML("afterbegin", `
            <h3 class="title">${data.skills.subtitulo}<span class="animate scroll" style="--i:2;"></span></h3>

                    <div class="skills-box">
                        <div class="skills-content">
                            <div class="progress">
                                <h3>${data.skills.lenguajes[0]} <span>${data.skills.porcentajes[0]}</span></h3>
                                <div class="bar"><span></span></div>
                            </div>

                            <div class="progress">
                                <h3>${data.skills.lenguajes[1]} <span>${data.skills.porcentajes[1]}</span></h3>
                                <div class="bar"><span></span></div>
                            </div>

                            <div class="progress">
                                <h3>${data.skills.porcentajes[2]} <span>${data.skills.porcentajes[2]}</span></h3>
                                <div class="bar"><span></span></div>
                            </div>

                            <div class="progress">
                                <h3>${data.skills.porcentajes[3]} <span>${data.skills.porcentajes[3]}</span></h3>
                                <div class="bar"><span></span></div>
                            </div>
                        </div>

                        <span class="animate scroll" style="--i:3;"></span>
                    </div>
        `);
        document.querySelector("#The_Skills").insertAdjacentHTML("afterbegin", `
            <h3 class="title">${data.skills.subtitulo_dos} <span class="animate scroll" style="--i:5;"></span></h3>

            <div class="skills-box">
                <div class="skills-content">
                    <div class="progress">
                        <h3>${data.skills.skills[0]} <span>${data.skills.porcentaje[0]}</span></h3>
                        <div class="bar"><span></span></div>
                    </div>

                    <div class="progress">
                        <h3>${data.skills.skills[1]} <span>${data.skills.porcentaje[1]}</span></h3>
                        <div class="bar"><span></span></div>
                    </div>

                    <div class="progress">
                        <h3>${data.skills.skills[2]} <span>${data.skills.porcentaje[2]}</span></h3>
                        <div class="bar"><span></span></div>
                    </div>

                    <div class="progress">
                        <h3>${data.skills.skills[3]} <span>${data.skills.porcentaje[3]}</span></h3>
                        <div class="bar"><span></span></div>
                    </div>
                </div>

                <span class="animate scroll" style="--i:6;"></span>
            </div>
        `);

    
                 

})