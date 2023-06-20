import data from './data/ghibli/ghibli.js';

export function obtenerPeliculas() {
  return data.films;
}

export function filtrarDirectores(films, director) {
  const filtroDirector = films.filter(film => film.director === director)
  return filtroDirector
}


export function filtrarTitulo(films, titulo) {
  const filtroTitulo = films.filter(film => film.title.includes(titulo))
  return filtroTitulo
}
export function filtrarPopulares(films, rt_score) {
  const filtroPopulares = films.filter(film => film.rt_score === rt_score)
  return filtrarPopulares
}

