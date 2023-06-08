import { obtenerPeliculas } from './data.js';
//importa funcion de data


//const que guarda la data de Estudio Ghibli//
const dataFilms = obtenerPeliculas(); //OBJETO//

//function mostrarPeliculas(peliculas){
//for (let i=0; i < dataFilms.length; i++) 
//console.log(dataFilms[i]);
//}

//const dataFilms = data.films; //Animaciones// ARRAY//
//console.log(dataFilms);
const filmsList = document.getElementById("filmsList"); //Lista de animaciones
const listaPeliculas = document.getElementById("listaPeliculas");
//Iterar en films para cada categoría// Muestra cada elemento del array
for (let i = 0; i < dataFilms.length; i++) {
  //console.log(dataFilms[i])
  const dataDirectors = dataFilms[i].director; //Directores
  //console.log(dataFilms[i].title + ": " + "Director: " + dataDirectors); //Concatena el título de la película con el director

  const dataYear = dataFilms[i].release_date; //Año
  //console.log(dataFilms[i].title + ": " + "Año: " + dataYear);

  const dataScore = dataFilms[i].rt_score; //Duración
  //console.log(dataFilms[i].title + ": " + "Duración: " + dataScore + " minutos");
}

function crearTarjetas(films) {

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
crearTarjetas(dataFilms);


//Header//
const buscadorInput = document.getElementById("textInput"); //Buscador
const buscarBtn = document.getElementById("botonBuscar"); //Botón buscar

//buscadorInput.addEventListener("input", function () {

//})

//buscarBtn.addEventListener("input", function () {

//})



//Categorías//
const directoresBtn = document.getElementById("directores"); //Botón directores
const duracionBtn = document.getElementById("directores"); //Botón duración
const añoBtn = document.getElementById("directores"); //Botón año
const locacionesBtn = document.getElementById("directores"); //Botón locaciones
const vehiculosBtn = document.getElementById("directores"); //Botón vehiculos
const premiadosBtn = document.getElementById("directores"); //Botón premiados

//Botón Regresar//
const regresarBtn = document.getElementById("botonReset")

regresarBtn.addEventListener("click", function () {

})

//Agregar eventos a los botones de categorías
directoresBtn.addEventListener("click", () => {

})

duracionBtn.addEventListener("click", function () {

})

añoBtn.addEventListener("click", function () {

})

locacionesBtn.addEventListener("click", function () {

})

vehiculosBtn.addEventListener("click", function () {

})

premiadosBtn.addEventListener("click", function () {

})