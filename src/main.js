import { obtenerPeliculas, filtrarDirectores } from './data.js';

const dataFilms = obtenerPeliculas();

//Lista de animaciones
const listaPeliculas = document.getElementById("listaPeliculas");

//Categorías//
const animacionesBtn = document.getElementById("animaciones")//Botón TODAS las animaciones
const directoresBtn = document.getElementById("directores")//Botón directores
const duracionBtn = document.getElementById("duracion"); //Botón duración
const añoBtn = document.getElementById("año"); //Botón año

//FILTRAR POR CATEGORIA//
function categoriaDirectores(films) {

  for (let i = 0; i < films.length; i++) {

    const contenedorDirectores = document.createElement("div")
    contenedorDirectores.classList.add("filterContainer")

    const tarjeta = document.createElement("section")
    tarjeta.classList.add("tarjetaFiltro")
    contenedorDirectores.appendChild(tarjeta)

    const imagen = document.createElement("img");
    imagen.classList.add("posterFiltro");
    imagen.src = films[i].poster;
    tarjeta.appendChild(imagen);

    const contenedorTexto = document.createElement("section")
    contenedorTexto.classList.add("contenedorTextoFiltro")
    tarjeta.appendChild(contenedorTexto)

    const nombre = document.createElement("h2")
    nombre.classList.add("tituloFlitro");
    nombre.innerText = films[i].title;
    contenedorTexto.appendChild(nombre);

    const director = document.createElement("p")
    director.innerText = "Director: " + films[i].director;
    contenedorTexto.appendChild(director)

    listaPeliculas.appendChild(contenedorDirectores)
  }
}
//categoriaDirectores(dataFilms);
directoresBtn.addEventListener("click", () => {
  document.getElementById('listaPeliculas').innerHTML = '';
  categoriaDirectores(dataFilms)
});

function categoriaAño(films) {

  for (let i = 0; i < films.length; i++) {

    const contenedorAño = document.createElement("div");
    contenedorAño.classList.add("filterContainer");

    const tarjeta = document.createElement("section");
    tarjeta.classList.add("tarjetaFiltro");
    contenedorAño.appendChild(tarjeta);

    const imagen = document.createElement("img");
    imagen.classList.add("posterFiltro");
    imagen.src = films[i].poster;
    tarjeta.appendChild(imagen);

    const contenedorTexto = document.createElement("section")
    contenedorTexto.classList.add("contenedorTextoFiltro")
    tarjeta.appendChild(contenedorTexto)

    const nombre = document.createElement("h2")
    nombre.classList.add("tituloFlitro");
    nombre.innerText = films[i].title;
    contenedorTexto.appendChild(nombre);

    const año = document.createElement("p");
    año.innerText = "Año: " + films[i].release_date;
    contenedorTexto.appendChild(año);

    listaPeliculas.appendChild(contenedorAño);
  }
}
//categoriaAño(dataFilms);
añoBtn.addEventListener("click", () => {
  document.getElementById('listaPeliculas').innerHTML = '';
  categoriaAño(dataFilms)
});

function categoriaDuracion(films) {

  for (let i = 0; i < films.length; i++) {

    const contenedorDuracion = document.createElement("div")
    contenedorDuracion.classList.add("filterContainer")

    const tarjeta = document.createElement("section")
    tarjeta.classList.add("tarjetaFiltro")
    contenedorDuracion.appendChild(tarjeta)

    const imagen = document.createElement("img")
    imagen.classList.add("posterFiltro")
    imagen.src = films[i].poster
    tarjeta.appendChild(imagen)

    const contenedorTexto = document.createElement("section")
    contenedorTexto.classList.add("contenedorTextoFiltro")
    tarjeta.appendChild(contenedorTexto)

    const nombre = document.createElement("h2")
    nombre.classList.add("tituloFlitro");
    nombre.innerText = films[i].title;
    contenedorTexto.appendChild(nombre);

    const duracion = document.createElement("p")
    duracion.innerText = "Duración: " + films[i].rt_score + " minutos";
    contenedorTexto.appendChild(duracion)

    listaPeliculas.appendChild(contenedorDuracion)
  }
}
//categoriaDuracion (dataFilms);
duracionBtn.addEventListener("click", () => {
  document.getElementById('listaPeliculas').innerHTML = '';
  categoriaDuracion(dataFilms)
});


//CREAR TARJETAS DE TODAS LAS ANIMACIONES//
const animacionesCategoria = function (films) {

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
//animacionesCategoria(dataFilms);
animacionesBtn.addEventListener("click", () => {
  document.getElementById('listaPeliculas').innerHTML = '';
  animacionesCategoria(dataFilms);
});

//////////FUNCION GENERAL//////////si funciona T.T
// function filtrarDirectores3(films, director) {
//   const filtroDirector = films.filter(film => film.director === director)
//   listaPeliculas.innerHTML = filtroDirector
// }
//PRUEBA CON BOTON FILTRAR//
//const filtrarBtn = document.getElementById("botonFiltroPrueba"); //Botón filtrar de prueba

// /////PRUEBA - FILTRAR DIRECTORES - BOTON DE PRUEBA//////// funciona :)
// filtrarBtn.addEventListener("click", function () {
//   document.getElementById('listaPeliculas').innerHTML = '';
//   filtrarDirectores(dataFilms, "Isao Takahata");
// });

//Header//
const buscadorInput = document.getElementById("textInput"); //Buscador

buscadorInput.addEventListener("keyup", function () {
  const textoIntroducido = buscadorInput.value;
  const directoresFiltrados = filtrarDirectores(dataFilms, textoIntroducido)
  console.log(directoresFiltrados)
})

const buscarBtn = document.getElementById("botonBuscar"); //Botón buscar

buscarBtn.addEventListener("input", function () {

})

//Botón limpiar filtro //
const limpiarBtn = document.getElementById("limparFiltro");

limpiarBtn.addEventListener("click", () => {
  document.getElementById('listaPeliculas').innerHTML = '';
});