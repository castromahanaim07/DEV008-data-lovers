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


//Filtros//

//funcionan//
// const animacionFiltroTotoro = dataFilms.filter(film => film.title === "My Neighbor Totoro")
// //console.log(animacionFiltroTotoro);

// const filtroDirectorHayao = dataFilms.filter(film => film.director === "Hayao Miyazaki")
// //console.log(filtroDirectorHayao);

// const filtroAñoAntiguas = dataFilms.filter(film => film.release_date < 1900) //NO FUNCIONA//
// console.log(filtroAñoAntiguas);


// const directoresFiltrados = dataFilms.filter(film =>
//   dataFilms.director === director)

//FUNCIONA PERO TIENE DETALLES QUE ARREGLAR//
// function filtrarDirectores(films) {

//   const filtroHayao = [];
//   for (let i = 0; i < films.length; i++) {
//     if (films[i].director === "Hayao Miyazaki") {
//       filtroHayao.push(dataFilms[i].title)
//     }
//   }
//   listaPeliculas.innerHTML = filtroHayao
// }
// filtrarDirectores(dataFilms)
//console.log(filtrarDirectores(dataFilms))

//PRUEBA 2 - FUNCIONES// funciona :)
// function filtrarDirectores2(films) {

//   const filtroDirectorHayao = films.filter(film => film.director === "Hayao Miyazaki")
//   listaPeliculas.innerHTML = filtroDirectorHayao
//   //console.log(filtroDirectorHayao)
// }
//filtrarDirectores2(dataFilms)

//////////FUNCION GENERAL//////////si funciona T.T
// function filtrarDirectores3(films, director) {
//   const filtroDirector = films.filter(film => film.director === director)
//   listaPeliculas.innerHTML = filtroDirector
// }
//PRUEBA CON BOTON FILTRAR//
const filtrarBtn = document.getElementById("botonFiltroPrueba"); //Botón filtrar de prueba

/////PRUEBA - FILTRAR DIRECTORES - BOTON DE PRUEBA//////// funciona :)
filtrarBtn.addEventListener("click", function () {
  document.getElementById('listaPeliculas').innerHTML = '';
  filtrarDirectores(dataFilms, "Isao Takahata");
});


// function filtrarDuracionAntiguas(films) {
//   for (let i = 0; i < films.length; i++) {
//     films.filter(film => films[i].rt_score < 1900)
//   }  
// }
// console.log(filtrarDuracionAntiguas(dataFilms))


//Header//
const buscadorInput = document.getElementById("textInput"); //Buscador
//const textoIntroducido = buscadorInput.value;

buscadorInput.addEventListener("keyup", function () {
  const textoIntroducido = buscadorInput.value;
  const directoresFiltrados = filtrarDirectores(dataFilms, textoIntroducido)
  console.log(directoresFiltrados)
})

 

/////PRUEBA - BUSCADOR - FILTRAR////// falta comprobar
// function filtrarBuscador(textoInput, tituloFilm) {
//   const textoFiltrar = textoInput.filter(film => film.title === tituloFilm)
//   const resultado = document.createElement("h2")
//   resultado.innerText = textoFiltrar;
//   listaPeliculas.appendChild(resultado)
// }

/////NO funciona//
// filtrarBtn.addEventListener("click", function () {
//   document.getElementById('listaPeliculas').innerHTML = '';
//   filtrarBuscador(textoIntroducido, "My Neighbor Totoro");
// });


//const animacionFiltroTotoro = dataFilms.filter(film => film.title === "My Neighbor Totoro")
//console.log(animacionFiltroTotoro);

//const textoIntroducido = buscadorInput.value;

const buscarBtn = document.getElementById("botonBuscar"); //Botón buscar

buscarBtn.addEventListener("input", function () {

})

//Botón limpiar filtro //
const limpiarBtn = document.getElementById("limparFiltro");

limpiarBtn.addEventListener("click", () => {
  document.getElementById('listaPeliculas').innerHTML = '';
});

//Botón Regresar//
// const regresarBtn = document.getElementById("Inicio")

// regresarBtn.addEventListener("click", function () {

// })

//ITERAR//

//Iterar en films para cada categoría// Muestra cada elemento del array
for (let i = 0; i < dataFilms.length; i++) {
  //console.log(dataFilms[i])
  // const dataDirectors = dataFilms[i].director; //Directores
  // //console.log(dataFilms[i].title + ": " + "Director: " + dataDirectors); //Concatena el título de la película con el director

  // const dataYear = dataFilms[i].release_date; //Año
  // //console.log(dataFilms[i].title + ": " + "Año: " + dataYear);

  // const dataScore = dataFilms[i].rt_score; //Duración
  //console.log(dataFilms[i].title + ": " + "Duración: " + dataScore + " minutos");
}