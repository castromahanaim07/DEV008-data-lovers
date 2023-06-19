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

export function filtrarAño(films, año) {
  const filtroAño = films.filter(film => film.release_date.includes(año))
  return filtroAño
}

export function añoFilms(films) {
  for (let i = 0; i < films.length; i++) {
    const dataAño = films[i].release_date;
    return dataAño
  }
}
