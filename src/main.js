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
const tarjetaAnimacion1 = document.getElementById("tarjetaAnimacion1");
const textoTarjeta1 = document.getElementById("informacionTarjeta1");
const imagenTarjeta1 = document.getElementById("imagenTarjeta1");

const tarjetaAnimacion2 = document.getElementById("tarjetaAnimacion2");
const textoTarjeta2 = document.getElementById("informacionTarjeta2");
const imagenTarjeta2 = document.getElementById("imagenTarjeta2");

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
const director = document.createElement ("p")
director.innerText = "Director: " + dataFilms[0].director;
textoTarjeta.appendChild(director)
const productor = document.createElement ("p")
productor.innerText = "Productor: " + dataFilms[0].producer;
textoTarjeta.appendChild(productor)
const año = document.createElement ("p")
año.innerText = "Año de lanzamiento: " + dataFilms[0].release_date;
textoTarjeta.appendChild(año)
const duracion = document.createElement ("p")
duracion.innerText = "Duración: " + dataFilms[0].rt_score + " minutos";
textoTarjeta.appendChild(duracion)

const imagen1 = document.createElement("img")
imagen1.src = dataFilms[1].poster
imagen1.classList.add("imagen1")
imagenTarjeta1.appendChild(imagen1)
const nombre1 = document.createElement("h2")
nombre1.innerText = dataFilms[1].title;
textoTarjeta1.appendChild(nombre1)
const director1 = document.createElement ("p")
director1.innerText = "Director: " + dataFilms[1].director;
textoTarjeta1.appendChild(director1)
const productor1 = document.createElement ("p")
productor1.innerText = "Productor: " + dataFilms[1].producer;
textoTarjeta1.appendChild(productor1)
const año1 = document.createElement ("p")
año1.innerText = "Año de lanzamiento: " + dataFilms[1].release_date;
textoTarjeta1.appendChild(año1)
const duracion1 = document.createElement ("p")
duracion1.innerText = "Duración: " + dataFilms[1].rt_score + " minutos";
textoTarjeta1.appendChild(duracion1)

const imagen2 = document.createElement("img")
imagen2.src = dataFilms[2].poster
imagen2.classList.add("imagen2")
imagenTarjeta2.appendChild(imagen2)
const nombre2 = document.createElement("h2")
nombre2.innerText = dataFilms[2].title;
textoTarjeta2.appendChild(nombre2)
const director2 = document.createElement ("p")
director2.innerText = "Director: " + dataFilms[2].director;
textoTarjeta2.appendChild(director2)
const productor2 = document.createElement ("p")
productor2.innerText = "Productor: " + dataFilms[2].producer;
textoTarjeta2.appendChild(productor2)
const año2 = document.createElement ("p")
año2.innerText = "Año de lanzamiento: " + dataFilms[2].release_date;
textoTarjeta2.appendChild(año2)
const duracion2 = document.createElement ("p")
duracion2.innerText = "Duración: " + dataFilms[2].rt_score + " minutos";
textoTarjeta2.appendChild(duracion2)




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