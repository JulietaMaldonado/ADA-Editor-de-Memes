//DISPLAY TEXTO E IMAGEN ASIDE
const asideImagen = document.getElementById("asideImagen");
const asideTexto = document.getElementById("asideTexto");

const textoBoton = document.getElementById("textoBoton");
const imagenBoton = document.getElementById("imagenBoton");

textoBoton.addEventListener("click", () => {
  asideImagen.style.display = "none";
  asideTexto.style.display = "block";
});

imagenBoton.addEventListener("click", () => {
  asideImagen.style.display = "block";
  asideTexto.style.display = "none";
});

//MODO LIGHT DE LA PAGINA
const modoLight = document.getElementById("modo");

modoLight.addEventListener("click", () => {
  document.getElementById("contenedor").classList.toggle(`lightMood2`);
  document.getElementById("encabezado").classList.toggle(`lightMood1`);
  document.getElementById("aside").classList.toggle(`lightMood3`);
  document.getElementById("imagenBoton").classList.toggle(`lightMood4:hover`);
  document.getElementById("textoBoton").classList.toggle(`lightMood4:hover`);
  document.getElementById("modo").classList.toggle(`lightMood4:hover`);
  document.getElementsById("urlImagen").classList.toggle(`lightMood2`);
  document.getElementsById("urlImagen").classList.toggle(`lightMood2`);
  document.getElementsById("colorFondoImagen").classList.toggle(`lightMood2`);
  document.getElementsById("modosFusion").classList.toggle(`lightMood2`);
  document.getElementsById("restablecerBoton").classList.toggle(`lightMood2`);
});

//FUNCIONES DEL ASIDE "IMAGEN"

//URL IMAGEN INPUT
const urlImagen = document.getElementById("urlImagen");
const meme = document.getElementById("meme");
urlImagen.addEventListener("input", () => {
  meme.style = `background-image: url(${urlImagen.value})`;
});

/*urlImagen.addEventListener("input", (event) => {
  const valorActual = event.target.value;
  meme.style.backgroundImage = url(valorActual);
});*/

//COLOR DE MEME INPUT
const colorFondoImagen = document.getElementById("colorFondoImagen");

colorFondoImagen.addEventListener("input", (event) => {
  const valorActual = event.target.value;
  meme.style.backgroundColor = valorActual;
});

//FUNCIONES DEL ASIDE "TEXTO"

//INPUT DE TEXTO SUPERIOR E INFERIOR
const textoTM = document.getElementById("textoTM");
const textoBM = document.getElementById("textoBM");
const textoTop = document.getElementById("textoTop");
const textoBotton = document.getElementById("textoBotton");

textoTop.addEventListener("input", (event) => {
  const valorActual = event.target.value;
  textoTM.innerHTML = valorActual;
});

textoBotton.addEventListener("input", (event) => {
  const valorActual = event.target.value;
  textoBM.innerHTML = valorActual;
});

//CHECK DE DISPLAY DE TEXTO SUPERIOR E INFERIOR
const displayTM = document.getElementById("displayTM");
const displayBM = document.getElementById("displayBM");

displayTM.addEventListener("click", () => {
  textoTM.classList.toggle("ocultar");
});
displayBM.addEventListener("click", () => {
  textoBM.classList.toggle("ocultar");
});

//FONDO TRANSPARENTE TEXTO SUPERIOR E INFERIOR
const fondoTransCheck = document.getElementById("fondoTransCheck");

fondoTransCheck.addEventListener("click", () => {
  textoTM.classList.toggle("fondoTrans");
  textoBM.classList.toggle("fondoTrans");
});
