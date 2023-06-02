// Crear funcion para filtrar directores
// Crear funcion para filtrar duración
// Crear funcion para filtrar año
// Crear funcion para filtrar locaciones
// Crear funcion para filtrar vehículos
// Crear funcion para filtrar premiados

// Crear funcion para buscador

export const directores = () => {

  return 'directores';
};

export const filmList = films => {
  const filmString = createFilmsItems (films)
  filmList.innerHTML = filmString
}

export const createFilmsItems = films => films.map(film => `<li>film.title</li>`.join (" "))