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
