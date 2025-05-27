let lastScrollTop = 0;
const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        // Oculta el menú al bajar
        nav.style.top = "-80px";
    } else {
        // Muestra el menú al subir
        nav.style.top = "0";
    }

    lastScrollTop = scrollTop;
});