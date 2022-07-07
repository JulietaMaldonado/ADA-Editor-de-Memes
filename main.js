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

//COLOR DE MEME INPUT
const colorFondoImagen = document.getElementById("colorFondoImagen");

colorFondoImagen.addEventListener("input", (event) => {
  const valorActual = event.target.value;
  meme.style.backgroundColor = valorActual;
});

//FILTROS DE IMAGEN
let fbri = document.getElementById("fbri");
let fopa = document.getElementById("fopa");
let fcon = document.getElementById("fcon");
let fdes = document.getElementById("fdes");
let fgri = document.getElementById("fgri");
let fsep = document.getElementById("fsep");
let fhue = document.getElementById("fhue");
let fsat = document.getElementById("fsat");
let fneg = document.getElementById("fneg");

const filtros = () => {
  meme.style.filter = `brightness(${fbri.value}) 
  opacity(${fopa.value}) 
  contrast(${fcon.value}%) 
  blur(${fdes.value}px)
  grayscale(${fgri.value}%)
  sepia(${fsep.value}%)
  hue-rotate(${fhue.value}deg)
  saturate(${fsat.value}%)
  invert(${fneg.value})`;
};
fbri.addEventListener("input", filtros);
fopa.addEventListener("input", filtros);
fcon.addEventListener("input", filtros);
fdes.addEventListener("input", filtros);
fgri.addEventListener("input", filtros);
fsep.addEventListener("input", filtros);
fhue.addEventListener("input", filtros);
fsat.addEventListener("input", filtros);
fneg.addEventListener("input", filtros);

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
  textoFondoTM.classList.toggle("ocultar");
});
displayBM.addEventListener("click", () => {
  textoFondoBM.classList.toggle("ocultar");
});

//SELECT FUENTES

const tiposFuentes = document.getElementById("tiposFuentes");

tiposFuentes.addEventListener("input", (event) => {
  console.log(event);
  textoTM.style.fontFamily = event.target.value;
  textoBM.style.fontFamily = event.target.value;
});

//INPUT DE COLOR DE TEXTO Y COLOR DE FONTO DE LOS TEXTOS SUPERIOR E INFERIOR

const colorTextoInput = document.getElementById("colorTextoInput");
const colorFondoInput = document.getElementById("colorFondoInput");
const textoFondoTM = document.getElementById("textoFondoTM");
const textoFondoBM = document.getElementById("textoFondoBM");

colorTextoInput.addEventListener("input", (event) => {
  textoTM.style.color = event.target.value;
  textoBM.style.color = event.target.value;
});
colorFondoInput.addEventListener("input", (event) => {
  textoFondoTM.style.backgroundColor = event.target.value;
  textoFondoBM.style.backgroundColor = event.target.value;
});

//FONDO TRANSPARENTE TEXTO SUPERIOR E INFERIOR
const fondoTransCheck = document.getElementById("fondoTransCheck");

fondoTransCheck.addEventListener("click", () => {
  textoFondoTM.classList.toggle("fondoTrans");
  textoFondoBM.classList.toggle("fondoTrans");
});

//FUENTE TAMANIO CAMBIO

const fuenteTam = document.getElementById("fuenteTam");

fuenteTam.addEventListener("input", (event) => {
  textoTM.style.fontSize = event.target.value;
  textoBM.style.fontSize = event.target.value;
});

//ALINEAR TEXTO SUPERIOR E INFERIOR
const aliIzquierda = document.getElementById("aliIzquierda");
const aliCentro = document.getElementById("aliCentro");
const aliDerecha = document.getElementById("aliDerecha");

aliIzquierda.addEventListener("click", () => {
  textoTM.style.textAlign = "left";
  textoBM.style.textAlign = "left";
});
aliCentro.addEventListener("click", () => {
  textoTM.style.textAlign = "center";
  textoBM.style.textAlign = "center";
});
aliDerecha.addEventListener("click", () => {
  textoTM.style.textAlign = "right";
  textoBM.style.textAlign = "right";
});

//BOTON DE DESCARGA
const descarga = document.getElementById("descarga");

descarga.addEventListener("click", () =>
  domtoimage
    .toBlob(document.getElementById("meme"))
    .then((blob) => saveAs(blob, "mi-meme.png"))
);
