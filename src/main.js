import { obtenerPeliculas } from './data.js';
//importa funcion de data

import data from './data/ghibli/ghibli.js'; //Importa la data de ghibli y la imprime en consola
//console.log(example, data);

//const que guarda la data de Estudio Ghibli//
//const dataGhibli = data; //OBJETO//
//console.log(dataGhibli);

const dataFilms = data.films; //Animaciones// ARRAY//
console.log(dataFilms);

const filmsList = document.getElementById("filmsList"); //Lista de animaciones
filmsList.innerHTML = //Para mostrar en dcumento//

//function mostrarPeliculas(dataFilms) {
//for (let i = 0; i < dataFilms.length; i++)
//return dataFilms[i];
//console.log(mostrarPeliculas)
//}


//Iterar en films para cada categoría// Muestra cada elemento del array
for (let i=0; i < dataFilms.length; i++) {
console.log(dataFilms[i])
//const dataDirectors = dataFilms[i].director; //Directores
//console.log(dataFilms[i].title + ": " + "Director: " + dataDirectors); //Concatena el título de la película con el director

//const dataYear = dataFilms[i].release_date; //Año
//console.log(dataFilms[i].title + ": " + "Año: " + dataYear);

//const dataScore = dataFilms[i].rt_score; //Duración
//console.log(dataFilms[i].title + ": " + "Duración: " + dataScore + " minutos");

//}

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

//variables de contenedores tarjeta html//
const tarjetaAnimacion = document.getElementById("tarjetaAnimacion");
const tituloTarjeta = document.getElementById("tituloTarjeta");
const descripcionTarjeta = document.getElementById("descripcionTarjeta");
const imagenTarjeta = document.getElementById("imagenTarjeta");
const directorTarjeta = document.getElementById("directorTarjeta");
const productorTarjeta = document.getElementById("productorTarjeta");
const añoTarjeta = document.getElementById("añoTarjeta");
const botonPersonajes = document.getElementById("botonPersonajes");
const duracionTarjeta = document.getElementById("duracionTarjeta");

//Iterar en films para cada categoría// Muestra cada elemento del array
for (let i=0; i < dataFilms.length; i++) {
  //console.log(dataFilms[i])
  const dataDirectors = dataFilms[i].director; //Directores
  //console.log(dataFilms[i].title + ": " + "Director: " + dataDirectors); //Concatena el título de la película con el director

  const dataYear = dataFilms[i].release_date; //Año
  //console.log(dataFilms[i].title + ": " + "Año: " + dataYear);

  const dataScore = dataFilms[i].rt_score; //Duración
  //console.log(dataFilms[i].title + ": " + "Duración: " + dataScore + " minutos");
  const filmName = dataFilms[i].title;
  const element = document.createElement("li")
  element.innerText=dataFilms[i]
  filmsList.appendChild(element)
  const imagen = document.createElement("img")
  imagen.src = dataFilms[i].poster
  imagen.classList.add("imagen")
  listaPeliculas.appendChild(imagen)
  const nombre= document.createElement("h3")
  nombre.innerText=filmName
  listaPeliculas.appendChild(nombre)
  
}

//Header//
const buscadorInput = document.getElementById("textInput"); //Buscador
const buscarBtn = document.getElementById("botonBuscar"); //Botón buscar

buscadorInput.addEventListener("input", function () {

})

buscarBtn.addEventListener("input", function () {

})



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