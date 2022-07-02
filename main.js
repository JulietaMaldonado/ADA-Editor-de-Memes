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

//URL IMAGEN INPUT
/*
const urlImagen = document.getElementById("urlImagen");
const meme = document.getElementById("meme");

urlImagen.addEventListener("click", (event) => {
  urlImagen.textContent = e.target.value;
  meme.style.toggle.backgroundImage(urlImagen);
});*/
