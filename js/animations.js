let animado = document.querySelectorAll(".Animado");
let animado2 = document.querySelectorAll(".Animado2");
const style = document.documentElement.style;
var Toques = 0;

function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < animado.length; i++) {
    let AlturaAnimado = animado[i].offsetTop;
    if (AlturaAnimado - 500 < scrollTop) {
      animado[i].style.opacity = 1;
      animado[i].classList.add("mostrarArriba");
    } else {
      animado[i].style.opacity = 0;
      animado[i].classList.remove("mostrarArriba");
    }
  }

  for (var i = 0; i < animado2.length; i++) {
    let AlturaAnimado = animado2[i].offsetTop;
    if (AlturaAnimado - 500 < scrollTop) {
      animado2[i].style.opacity = 1;
      animado2[i].classList.add("MostrarLado");
    } else {
      animado2[i].style.opacity = 0;
      animado2[i].classList.remove("MostrarLado");
    }
  }
}

window.addEventListener("scroll", mostrarScroll);
