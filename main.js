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
  //contenedor principal
  document.getElementById("contenedor").classList.toggle(`lightMood2`);
  //encabezado con menu
  document.getElementById("encabezado").classList.toggle(`lightMood1`);
  document.getElementById("tituloEn").classList.toggle(`lightMood1`);
  document.getElementById("nav").classList.toggle(`lightMood1`);
  //barra de navegacion
  document.getElementById("imagenBoton").classList.toggle(`lightMood4`);
  document.getElementById("textoBoton").classList.toggle(`lightMood4`);
  document.getElementById("modo").classList.toggle(`lightMood4`);
  //aside
  document.getElementById("aside").classList.toggle(`lightMood3`);
  //elementos aside imagen
  document.getElementById("tituloImagen").classList.toggle(`lightMood3`);
  document.getElementById("urlImagen").classList.toggle(`lightMood2`);
  document.getElementById("colorFondoImagen").classList.toggle(`lightMood2`);
  document.getElementById("modosFusion").classList.toggle(`lightMood2`);

  document.getElementById("url").classList.toggle(`lightMood3`);
  document.getElementById("fondo").classList.toggle(`lightMood3`);
  document.getElementById("filtros").classList.toggle(`lightMood3`);
  document.getElementById("brillo").classList.toggle(`lightMood3`);
  document.getElementById("opacidad").classList.toggle(`lightMood3`);
  document.getElementById("contraste").classList.toggle(`lightMood3`);
  document.getElementById("desenfoque").classList.toggle(`lightMood3`);
  document.getElementById("grises").classList.toggle(`lightMood3`);
  document.getElementById("sepia").classList.toggle(`lightMood3`);
  document.getElementById("hue").classList.toggle(`lightMood3`);
  document.getElementById("saturado").classList.toggle(`lightMood3`);
  document.getElementById("negativo").classList.toggle(`lightMood3`);

  document.getElementById("restablecerBoton").classList.toggle(`lightMood2`);
  //elementos aside texto
  document.getElementById("tituloTexto").classList.toggle(`lightMood3`);
  document.getElementById("superior").classList.toggle(`lightMood3`);
  document.getElementById("textoTop").classList.toggle(`lightMood2`);
  document.getElementById("sinTT").classList.toggle(`lightMood3`);
  document.getElementById("inferior").classList.toggle(`lightMood3`);
  document.getElementById("textoBotton").classList.toggle(`lightMood2`);
  document.getElementById("sinTB").classList.toggle(`lightMood3`);
  document.getElementById("textoFuente").classList.toggle(`lightMood3`);
  document.getElementById("tiposFuentes").classList.toggle(`lightMood2`);
  document.getElementById("fuenteTam").classList.toggle(`lightMood2`);
  document.getElementById("aliIzquierda").classList.toggle(`lightMood2`);
  document.getElementById("aliCentro").classList.toggle(`lightMood2`);
  document.getElementById("aliDerecha").classList.toggle(`lightMood2`);
  document.getElementById("textoColor").classList.toggle(`lightMood3`);
  document.getElementById("colorTextoInput").classList.toggle(`lightMood2`);
  document.getElementById("textoFondo").classList.toggle(`lightMood3`);
  document.getElementById("colorFondoInput").classList.toggle(`lightMood2`);
  document.getElementById("textoCheck").classList.toggle(`lightMood3`);
  document.getElementById("textoContorno").classList.toggle(`lightMood3`);
  document.getElementById("contornoBotonNin").classList.toggle(`lightMood2`);
  document.getElementById("contornoBotonCla").classList.toggle(`lightMood2`);
  document.getElementById("contornoBotonOsc").classList.toggle(`lightMood2`);
  document.getElementById("textoEspaciado").classList.toggle(`lightMood3`);
  document.getElementById("espaciado").classList.toggle(`lightMood2`);
  document.getElementById("textoInterlineado").classList.toggle(`lightMood3`);
  document
    .getElementById("interlineadoSelectValores")
    .classList.toggle(`lightMood2`);
});

//FUNCIONES DEL ASIDE "IMAGEN"

//URL IMAGEN INPUT
const urlImagen = document.getElementById("urlImagen");
const memeFondo = document.getElementById("memeFondo");
urlImagen.addEventListener("input", () => {
  memeFondo.style = `background-image: url(${urlImagen.value})`;
});

//COLOR DE MEME INPUT
const colorFondoImagen = document.getElementById("colorFondoImagen");

colorFondoImagen.addEventListener("input", (event) => {
  const valorActual = event.target.value;
  memeFondo.style.backgroundColor = valorActual;
});

//MODOS DE FUSION
const modosFusion = document.getElementById("modosFusion");

modosFusion.addEventListener("input", (event) => {
  memeFondo.style.backgroundBlendMode = event.target.value;
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
  memeFondo.style.filter = `brightness(${fbri.value}) 
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
const textoFondoTM = document.getElementById("textoFondoTM");
const textoFondoBM = document.getElementById("textoFondoBM");

displayTM.addEventListener("click", () => {
  textoFondoTM.classList.toggle("ocultar");
  memeFondo.classList.toggle("memeTaG1");
  textoFondoBM.classList.toggle("memeTaB1");
});
displayBM.addEventListener("click", () => {
  textoFondoBM.classList.toggle("ocultar");
  memeFondo.classList.toggle("memeTaG2");
});

//SELECT FUENTES

const tiposFuentes = document.getElementById("tiposFuentes");

tiposFuentes.addEventListener("input", (event) => {
  textoTM.style.fontFamily = event.target.value;
  textoBM.style.fontFamily = event.target.value;
});

//INPUT DE COLOR DE TEXTO Y COLOR DE FONTO DE LOS TEXTOS SUPERIOR E INFERIOR

const colorTextoInput = document.getElementById("colorTextoInput");
const colorFondoInput = document.getElementById("colorFondoInput");

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
  memeFondo.classList.toggle("memeTaG3");
  textoFondoBM.classList.toggle("tituloBMar");
});

//FUENTE TAMANIO CAMBIO

const fuenteTam = document.getElementById("fuenteTam");

fuenteTam.addEventListener("input", (event) => {
  textoTM.style.fontSize = `${event.target.value}px`;
  textoBM.style.fontSize = `${event.target.value}px`;
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

//CORTONO DE TEXTO
const contornoBotonNin = document.getElementById("contornoBotonNin");
const contornoBotonCla = document.getElementById("contornoBotonCla");
const contornoBotonOsc = document.getElementById("contornoBotonOsc");

contornoBotonNin.addEventListener("click", () => {
  textoTM.classList.toggle = "contNinguno";
  textoBM.classList.toggle = "contNinguno";
});
contornoBotonCla.addEventListener("click", () => {
  textoTM.classList.toggle = "contClaro";
  textoBM.classList.toggle = "contClaro";
});
contornoBotonOsc.addEventListener("click", () => {
  textoTM.classList.toggle = "contOscuro";
  textoBM.classList.toggle = "contOscuro";
});

//ESPACIADO DE TEXTO
const espaciado = document.getElementById("espaciado");
espaciado.addEventListener("input", (event) => {
  textoFondoTM.style.padding = `${event.target.value}px`;
  textoFondoBM.style.padding = `${event.target.value}px`;
});

//INTERLINEADO DEL TEXTO
const interlineadoSelectValores = document.getElementById(
  "interlineadoSelectValores"
);

interlineadoSelectValores.addEventListener("input", (event) => {
  textoFondoTM.style.lineHeight = event.target.value;
  textoFondoBM.style.lineHeight = event.target.value;
});

//BOTON DE DESCARGA
const descarga = document.getElementById("descarga");

descarga.addEventListener("click", () =>
  domtoimage
    .toBlob(document.getElementById("meme"))
    .then((blob) => saveAs(blob, "mi-meme.png"))
);
