//import { example } from './data.js';
//importa funcion de data

import data from './data/ghibli/ghibli.js'; //Importa la data de ghibli y la imprime en consola
//console.log(example, data);

//const que guarda la data de Estudio Ghibli//
const dataGhibli = data; //OBJETO//
console.log(dataGhibli);

const dataFilms = data.films; //Animaciones// ARRAY//
console.log(dataFilms);

//Iterar en films para cada categoría// Muestra cada elemento del array
for (let i=0; i < dataFilms.length; i++) {
  //console.log(dataFilms[i])
  const dataDirectors = dataFilms[i].director; //Directores
  //console.log(dataFilms[i].title + ": " + "Director: " + dataDirectors); //Concatena el título de la película con el director

  const dataYear = dataFilms[i].release_date; //Año
  console.log(dataFilms[i].title + ": " + "Año: " + dataYear);

  const dataScore = dataFilms[i].rt_score; //Duración
  //console.log(dataFilms[i].title + ": " + "Duración: " + dataScore + " minutos");

  //const dataLocations = dataFilms[i].locations; //Locaciones
  //console.log(dataLocations);

  //const dataVehicles = dataFilms[i].vehicles; //Vehículos
  //console.log(dataVehicles);

}


const filmsList = document.getElementById("filmsList"); //Lista de animaciones
filmsList.innerHTML  //Para mostrar en dcumento//

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