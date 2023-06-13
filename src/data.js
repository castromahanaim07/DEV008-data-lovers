import data from './data/ghibli/ghibli.js';
export function obtenerPeliculas(){
  return data.films

}

export function filtrarDirectores(films, director) {
  const filtroDirector = films.filter(film => film.director === director)
  return filtroDirector
}