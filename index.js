// funcion que muestra el header
document.addEventListener("DOMContentLoaded", function () {
    const hero = document.querySelector('.hero');
    const options = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $('.header').removeClass("visible");
            } else {
                $('.header').addClass("visible");
            }
        });
    }, options);
    observer.observe(hero);
});

document.addEventListener("DOMContentLoaded", function () {
    const oferta = document.querySelector('.oferta');
    const options = {
      threshold: 0.7
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $('.oferta-logo').addClass('presentation');
            }
        });
    }, options);
    observer.observe(oferta);
});

$('.link-inicio').on('click', function(event) {
    event.preventDefault();
    document.getElementById('inicio').scrollIntoView({ behavior: 'smooth' }); 
});

$('.link-nosotros').on('click', function(event) {
    event.preventDefault();
    document.getElementById('nosotros').scrollIntoView({ behavior: 'smooth' }); 
});

$('.link-productos').on('click', function(event) {
    event.preventDefault();
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' }); 
});

$('.link-contacto').on('click', function(event) {
    event.preventDefault();
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' }); 
});