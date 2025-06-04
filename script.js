$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // efeito scroll alterar navbar
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });
});

// typed js digitacao
var typed = new Typed(".digitacao", {
    strings: ["desenvolvimento front-end","design", "QA engineering", "garantia de qualidade"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// efeito tilt em imagem
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});

const scroll = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

function buscarProjetos() { 
    return fetch("assets/projetos.json") 
        .then(response => response.json())
        .then(dados => dados); 
}

function mostrarProjetos(projetos) { 
    let containerProjetos = document.querySelector(".projetos .box-container"); 
    let htmlProjetos = ""; 
    projetos.forEach(projeto => { 
        htmlProjetos += `
        <div class="box tilt">
            <img draggable="false" src="assets/imagens/${projeto.imagem}" alt="${projeto.nome}" />
            <div class="content">
                <div class="tag">
                    <h3>${projeto.nome}</h3>
                </div>
                <div class="desc">
                    <p>${projeto.descricao}</p>
                    <div class="btns">
                        <a href="${projeto.links.ver}" class="btn" target="_blank"><i class="fas fa-eye"></i> Ver Projeto</a>
                    </div>
                </div>
            </div>
        </div>`;
    });
    containerProjetos.innerHTML = htmlProjetos;

    VanillaTilt.init(document.querySelectorAll(".projetos .box-container .tilt"), {
        max: 15,
    });

    scroll.reveal('.projetos .box-container .box', {
        origin: 'bottom',
        distance: '60px',
        interval: 150 
    });
}

buscarProjetos().then(dados => { 
    mostrarProjetos(dados); 
});

// home
scroll.reveal('.home .conteudo h3', { delay: 200 });
scroll.reveal('.home .conteudo p', { delay: 200 });
scroll.reveal('.home .conteudo .btn', { delay: 200 });

scroll.reveal('.home .image', { delay: 400 });
scroll.reveal('.home .linkedin', { interval: 600 });
scroll.reveal('.home .github', { interval: 800 });

// sobre
scroll.reveal('.sobre .conteudo h3', { delay: 200 });
scroll.reveal('.sobre .conteudo .tag', { delay: 200 });
scroll.reveal('.sobre .conteudo p', { delay: 200 });
scroll.reveal('.sobre .conteudo .box-container', { delay: 200 });
scroll.reveal('.sobre .conteudo .resumebtn', { delay: 200 });

// projetos
scroll.reveal('.projetos .heading', { delay: 400 });

// experiencia
scroll.reveal('.experiencia .timeline', { delay: 400 });
scroll.reveal('.experiencia .timeline .container', { interval: 400 });