import { obtenerPeliculas } from './data.js';
//importa funcion de data

//const que guarda el array de Films//
const dataFilms = obtenerPeliculas();

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
const textoTarjeta = document.getElementById("informacionTarjeta");
const imagenTarjeta = document.getElementById("imagenTarjeta");
//const descripcionTarjeta = document.getElementById("descripcionTarjeta");

//for (let i = 0; i < dataFilms.length; i++) {
//   const element = document.createElement("li")
//   element.innerText = dataFilms[i]
//   filmsList.appendChild(element)
const imagen = document.createElement("img")
imagen.src = dataFilms[0].poster
imagen.classList.add("imagen")
imagenTarjeta.appendChild(imagen)
const nombre = document.createElement("h2")
nombre.innerText = dataFilms[0].title;
textoTarjeta.appendChild(nombre)
const director = document.createElement ("h4")
director.innerText = "Director: " + dataFilms[0].director;
textoTarjeta.appendChild(director)
const productor = document.createElement ("h4")
productor.innerText = "Productor: " + dataFilms[0].producer;
textoTarjeta.appendChild(productor)
const año = document.createElement ("h4")
año.innerText = "Año de lanzamiento: " + dataFilms[0].release_date;
textoTarjeta.appendChild(año)
const duracion = document.createElement ("h4")
duracion.innerText = "Duración: " + dataFilms[0].rt_score + " minutos";
textoTarjeta.appendChild(duracion)
// const descripcion = document.createElement ("h4")  //NOTA: ESTA EN INGLES//
// descripcion.innerText = "Descripción: " + dataFilms[0].description;
// textoTarjeta.appendChild(descripcion)

//}






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

//FILTRAR//

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