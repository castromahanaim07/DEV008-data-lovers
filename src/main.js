import { obtenerPeliculas, filtrarDirectores, filtrarTitulo, filtrarMasRecientes, filtrarRecientes, filtrarMenosRecientes, filtrarMasPopulares, filtrarMenosPopulares } from './data.js';

const dataFilms = obtenerPeliculas();

//Contenedor de resultador//
const listaPeliculas = document.getElementById("listaPeliculas");

//Categorías//
const animacionesBtn = document.getElementById("animaciones")
const directoresBtn = document.getElementById("directores")
const añoBtn = document.getElementById("año");

//FILTRAR POR CATEGORIA//
function categoriaDirectores(films) {

  for (let i = 0; i < films.length; i++) {

    const contenedorTarjetas = document.createElement("div")
    contenedorTarjetas.classList.add("container")
    listaPeliculas.appendChild(contenedorTarjetas)

    const tarjeta = document.createElement("section")
    tarjeta.classList.add("contenedorTarjeta")
    contenedorTarjetas.appendChild(tarjeta)

    const contenedorImagen = document.createElement("section")
    contenedorImagen.classList.add("contenedorImagen")
    tarjeta.appendChild(contenedorImagen)

    const imagen = document.createElement("img")
    imagen.src = films[i].poster
    contenedorImagen.appendChild(imagen)

    const contenedorTexto = document.createElement("section")
    contenedorTexto.classList.add("contenedorTexto")
    tarjeta.appendChild(contenedorTexto)

    const nombre = document.createElement("h2")
    nombre.innerText = films[i].title;
    contenedorTexto.appendChild(nombre)
    const director = document.createElement("p")
    director.innerText = "Director: " + films[i].director;
    contenedorTexto.appendChild(director)

    contenedorTexto.appendChild(nombre)
    contenedorTexto.appendChild(director)
  }
}
//categoriaDirectores(dataFilms);
directoresBtn.addEventListener("click", () => {
  document.getElementById('listaPeliculas').innerHTML = '';
  categoriaDirectores(dataFilms)
});

function categoriaAño(films) {

  for (let i = 0; i < films.length; i++) {

    const contenedorTarjetas = document.createElement("div")
    contenedorTarjetas.classList.add("container")
    listaPeliculas.appendChild(contenedorTarjetas)

    const tarjeta = document.createElement("section")
    tarjeta.classList.add("contenedorTarjeta")
    contenedorTarjetas.appendChild(tarjeta)

    const contenedorImagen = document.createElement("section")
    contenedorImagen.classList.add("contenedorImagen")
    tarjeta.appendChild(contenedorImagen)

    const imagen = document.createElement("img")
    imagen.src = films[i].poster
    contenedorImagen.appendChild(imagen)

    const contenedorTexto = document.createElement("section")
    contenedorTexto.classList.add("contenedorTexto")
    tarjeta.appendChild(contenedorTexto)

    const nombre = document.createElement("h2")
    nombre.innerText = films[i].title;
    contenedorTexto.appendChild(nombre)
    const año = document.createElement("p")
    año.innerText = "Año de lanzamiento: " + films[i].release_date;
    contenedorTexto.appendChild(año)

    contenedorTexto.appendChild(nombre)
    contenedorTexto.appendChild(año)
  }
}
//categoriaAño(dataFilms);
añoBtn.addEventListener("click", () => {
  document.getElementById('listaPeliculas').innerHTML = '';
  categoriaAño(dataFilms)
});

//CREAR TARJETAS DE TODAS LAS ANIMACIONES//
const animacionesTarjeta = function (films) {

  for (let i = 0; i < films.length; i++) {

    const contenedorTarjetas = document.createElement("div")
    contenedorTarjetas.classList.add("container")
    listaPeliculas.appendChild(contenedorTarjetas)

    const tarjeta = document.createElement("section")
    tarjeta.classList.add("contenedorTarjeta")
    contenedorTarjetas.appendChild(tarjeta)

    const contenedorImagen = document.createElement("section")
    contenedorImagen.classList.add("contenedorImagen")
    tarjeta.appendChild(contenedorImagen)

    const imagen = document.createElement("img")
    imagen.src = films[i].poster
    contenedorImagen.appendChild(imagen)

    const contenedorTexto = document.createElement("section")
    contenedorTexto.classList.add("contenedorTexto")
    tarjeta.appendChild(contenedorTexto)

    const nombre = document.createElement("h2")
    nombre.innerText = films[i].title;
    contenedorTexto.appendChild(nombre)
    const director = document.createElement("p")
    director.innerText = "Director: " + films[i].director;
    contenedorTexto.appendChild(director)
    const productor = document.createElement("p")
    productor.innerText = "Productor: " + films[i].producer;
    contenedorTexto.appendChild(productor)
    const año = document.createElement("p")
    año.innerText = "Año de lanzamiento: " + films[i].release_date;
    contenedorTexto.appendChild(año)
    const score = document.createElement("p")
    score.innerText = "Popularidad: " + films[i].rt_score + " puntos";
    contenedorTexto.appendChild(score)

    contenedorTexto.appendChild(nombre)
    contenedorTexto.appendChild(director)
    contenedorTexto.appendChild(productor)
    contenedorTexto.appendChild(año)
    contenedorTexto.appendChild(score)
  }
}
animacionesTarjeta(dataFilms);
animacionesBtn.addEventListener("click", () => {
  document.getElementById('listaPeliculas').innerHTML = '';
  animacionesTarjeta(dataFilms);
});

//Buscador//
const buscadorInput = document.getElementById("textInput");

buscadorInput.addEventListener("keyup", function () {
  const textoIntroducido = buscadorInput.value;
  const tituloFiltrado = filtrarTitulo(dataFilms, textoIntroducido)
  document.getElementById('listaPeliculas').innerHTML = '';
  animacionesTarjeta(tituloFiltrado);
  console.log(tituloFiltrado)
})

//Menu de filtros//
let directorSeleccionado = "";
const seleccionadoDirector = document.getElementById("directorOpcion");
seleccionadoDirector.addEventListener("change", function (e) {
  directorSeleccionado = e.target.value;
  console.log(directorSeleccionado)
})
seleccionadoDirector.addEventListener("click", function () {
  let directorFiltrado = [];
  if (directorSeleccionado === "Director") {
    directorFiltrado = dataFilms
  } else {
    directorFiltrado = filtrarDirectores(dataFilms, directorSeleccionado)
  }
  document.getElementById('listaPeliculas').innerHTML = '';
  animacionesTarjeta(directorFiltrado);
  console.log(directorFiltrado)
})

// //Filtros Año//
let añoSeleccionado = "";
const seleccionadoAño = document.getElementById("añoOpcion");
seleccionadoAño.addEventListener("change", function (e) {
  añoSeleccionado = e.target.value;
  console.log(añoSeleccionado)
})

seleccionadoAño.addEventListener("click", function () {
  let añoSeleccionadoFiltro = [];
  if (añoSeleccionado === "2000's") {
    añoSeleccionadoFiltro = filtrarMasRecientes(dataFilms)
  } else if (añoSeleccionado === "1990's") {
    añoSeleccionadoFiltro = filtrarRecientes(dataFilms)
  } else if (añoSeleccionado === "1980's") {
    añoSeleccionadoFiltro = filtrarMenosRecientes(dataFilms)
  } else { añoSeleccionadoFiltro = dataFilms }
  document.getElementById('listaPeliculas').innerHTML = '';
  animacionesTarjeta(añoSeleccionadoFiltro);
  console.log(añoSeleccionadoFiltro)
})

// //Filtros Popularidad//
let popularSeleccionado = "";
const seleccionadoPopular = document.getElementById("popularidadOpcion");
seleccionadoPopular.addEventListener("change", function (e) {
  popularSeleccionado = e.target.value;
  console.log(popularSeleccionado);
})
seleccionadoPopular.addEventListener("click", function () {
  let popularSeleccionadoFiltro = [];
  if (popularSeleccionado === "Más populares") {
    popularSeleccionadoFiltro = filtrarMasPopulares(dataFilms);
  } else if (popularSeleccionado === "Menos populares") {
    popularSeleccionadoFiltro = filtrarMenosPopulares(dataFilms);
  } else { popularSeleccionadoFiltro = dataFilms }
  document.getElementById('listaPeliculas').innerHTML = '';
  animacionesTarjeta(popularSeleccionadoFiltro);
  console.log(popularSeleccionadoFiltro)

})

// Botón limpiar filtro //
const limpiarBtn = document.getElementById("limpiarFiltro");

limpiarBtn.addEventListener("click", () => {
  document.getElementById('listaPeliculas').innerHTML = '';
  animacionesTarjeta(dataFilms);
});

//Botón Ir arriba//
// const arribaBtn = document.getElementById("botonIrArriba"); //Agregar evento//
// console.log(arribaBtn)

//PRUEBAS filtrar año + sort/// NO FUNCIONA MENU///

const ordenarMasRecientes = dataFilms.sort((a, b) => b.release_date - a.release_date)
console.log(ordenarMasRecientes);

const ordenarMenosRecientes = dataFilms.sort((a, b) => a.release_date - b.release_date)
console.log(ordenarMenosRecientes);

const ordenarMasPopulares = dataFilms.sort((a, b) => b.rt_score - a.rt_score)
console.log(ordenarMasPopulares);

const ordenarMenosPopulares = dataFilms.sort((a, b) => a.rt_score - b.rt_score)
console.log(ordenarMenosPopulares);

let opcionSeleccionadaOrdenar = "";
const menuOrdenar = document.getElementById("menuOrdenar");
menuOrdenar.addEventListener("change", function (e) {
  opcionSeleccionadaOrdenar = e.target.value;
  console.log(opcionSeleccionadaOrdenar);
})

menuOrdenar.addEventListener("click", function () {
  let opcionOrdenar = [];
  if (opcionSeleccionadaOrdenar === "Más recientes") {
    opcionOrdenar = ordenarMasRecientes;
  } else if (opcionSeleccionadaOrdenar === "Menos recientes") {
    opcionOrdenar = ordenarMenosRecientes;
  } else if (opcionSeleccionadaOrdenar === "Más populares") {
    opcionOrdenar = ordenarMasPopulares;
  }else if (opcionSeleccionadaOrdenar === "Menos populares"){
    opcionOrdenar = ordenarMenosPopulares;
  }
  document.getElementById('listaPeliculas').innerHTML = '';
  animacionesTarjeta(opcionOrdenar);
  console.log(opcionOrdenar)
})