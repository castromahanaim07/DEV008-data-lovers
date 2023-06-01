import { example } from './data.js';
//funcion de data

import data from './data/ghibli/ghibli.js'; //Importa la data de ghibli y la imprime en consola
console.log(example, data);

//Header//
const buscadorInput = document.getElementById("textInput") //Buscador
const buscarBtn = document.getElementById("botonBuscar") //Botón buscar

//Categorías//
const directoresBtn = document.getElementById("directores"); //Botón directores
const duracionBtn = document.getElementById("directores"); //Botón duración
const añoBtn = document.getElementById("directores"); //Botón año
const locacionesBtn = document.getElementById("directores"); //Botón locaciones
const vehiculosBtn = document.getElementById("directores"); //Botón vehiculos
const premiadosBtn = document.getElementById("directores"); //Botón premiados

//Botón Regresar//
const regresarBtn = document.getElementById("botonReset")