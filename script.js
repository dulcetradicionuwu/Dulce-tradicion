// =====================================================
// DULCE TRADICIÓN
// Interacciones de la página
// =====================================================


// ================= MENÚ MÓVIL =================

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});


// Cerrar menú cuando se selecciona una sección

document.querySelectorAll(".nav a").forEach((link) => {

  link.addEventListener("click", () => {

    nav.classList.remove("open");

  });

});


// ================= ANIMACIONES =================

const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },

  {
    threshold: 0.12
  }

);


// Observar todos los elementos con la clase reveal

document.querySelectorAll(".reveal").forEach((element) => {

  observer.observe(element);

});


// ================= EFECTO DEL MARQUEE =================

const marquee = document.querySelector(".marquee div");

if (marquee) {

  marquee.style.animation =
    "scroll 18s linear infinite";

}


// ================= AÑO AUTOMÁTICO =================

const yearElement =
  document.querySelector(".footer-bottom");

if (yearElement) {

  const currentYear =
    new Date().getFullYear();

  yearElement.innerHTML =
    `© ${currentYear} Dulce Tradición · Proyecto académico`;

}
