import { obtenerPeliculas, filtrarDirectores, filtrarTitulo, filtrarPopulares } from './data.js';

const dataFilms = obtenerPeliculas();

//Contenedor de resultador//
const listaPeliculas = document.getElementById("listaPeliculas");

//Categorías//
const animacionesBtn = document.getElementById("animaciones")//Botón TODAS las animaciones
const directoresBtn = document.getElementById("directores")//Botón directores
const duracionBtn = document.getElementById("duracion"); //Botón duración
const añoBtn = document.getElementById("año"); //Botón año

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

function categoriaDuracion(films) {

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
    const duracion = document.createElement("p");
    duracion.innerText = "Duración: " + films[i].rt_score + " minutos";
    contenedorTexto.appendChild(duracion)

    contenedorTexto.appendChild(nombre)
    contenedorTexto.appendChild(duracion)
  }
}
//categoriaDuracion (dataFilms);
duracionBtn.addEventListener("click", () => {
  document.getElementById('listaPeliculas').innerHTML = '';
  categoriaDuracion(dataFilms)
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
    const duracion = document.createElement("p")
    duracion.innerText = "Duración: " + films[i].rt_score + " minutos";
    contenedorTexto.appendChild(duracion)

    contenedorTexto.appendChild(nombre)
    contenedorTexto.appendChild(director)
    contenedorTexto.appendChild(productor)
    contenedorTexto.appendChild(año)
    contenedorTexto.appendChild(duracion)
  }
}
animacionesTarjeta(dataFilms);
animacionesBtn.addEventListener("click", () => {
  document.getElementById('listaPeliculas').innerHTML = '';
  animacionesTarjeta(dataFilms);
});

//Header//
const buscadorInput = document.getElementById("textInput"); //Buscador

buscadorInput.addEventListener("keyup", function () {
  const textoIntroducido = buscadorInput.value;
  const tituloFiltrado = filtrarTitulo(dataFilms, textoIntroducido)
  document.getElementById('listaPeliculas').innerHTML = '';
  animacionesTarjeta(tituloFiltrado);
  //console.log(tituloFiltrado)
})

//Filtros Directores//
//const botonBuscarDirectores = document.getElementById("botonBuscarDirector");
//const directorHayao = document.getElementById("hayao"); 

//botonBuscarDirectores.addEventListener("click", function () { 
  //const directorFiltradoHayao = filtrarDirectores(dataFilms, directorHayao.value);
  // document.getElementById('listaPeliculas').innerHTML = '';
  // animacionesTarjeta(directorFiltradoHayao);
  //console.log(directorFiltradoHayao)
//})
//filtrar por popularidad
Popularidad.addEventListener("click", function () { 
  const popularFiltrada = filtrarPopulares(dataFilms,rt_score.value);
  document.getElementById('listaPeliculas').innerHTML = '';
  animacionesTarjeta(filtrarPopulares);
})


//Botón limpiar filtro //
const limpiarBtn = document.getElementById("limparFiltro");

limpiarBtn.addEventListener("click", () => {
  document.getElementById('listaPeliculas').innerHTML = '';
  animacionesTarjeta(dataFilms);
});

//Botón Ir arriba//
const arribaBtn = document.getElementById("botonIrArriba"); //Agregar evento//
//console.log(arribaBtn)