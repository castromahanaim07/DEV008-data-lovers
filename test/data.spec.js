import { filtrarDirectores, filtrarTitulo, filtrarMasRecientes, filtrarRecientes, filtrarMenosRecientes, filtrarMasPopulares, filtrarMenosPopulares } from '../src/data.js';
const films = [{
  "title": "Castle in the Sky",
  "director": "Hayao Miyazaki",
  "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
  "release_date": "1986",
  "rt_score": "75",
},
{
  "title": "My Neighbor Totoro",
  "director": "Isao Takahata",
  "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
  "release_date": "1998",
  "rt_score": "93",
},
{
  "title": "Porco Rosso",
  "director": "Yoshifumi Kondō",
  "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/41/Porco_Rosso.jpg",
  "release_date": "2002",
  "rt_score": "94",
}]; 

describe('Test que filtra por el nombre de los directores', () => {
  it('Debería devolver un array de objetos que coincidan con el director ingresado', () => {
    expect(filtrarDirectores(films, "Isao Takahata")).toEqual(
      [{
        "title": "My Neighbor Totoro",
        "director": "Isao Takahata",
        "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
        "release_date": "1998",
        "rt_score": "93",
      }]);
  });
})

describe('Test que filtra por el título de las animaciones', () => {
  it('Debería devolver un array de objetos que coincidan con el título ingresado', () => {
    expect(filtrarTitulo(films, "Porco Rosso")).toEqual(
      [{
        "title": "Porco Rosso",
        "director": "Yoshifumi Kondō",
        "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/41/Porco_Rosso.jpg",
        "release_date": "2002",
        "rt_score": "94",
      }]);
  });
})

describe('Test que filtra films lanzados del año 2000 en adelante', () => {
  it('Debería devolver un array de objetos con los films lanzados a partir del año 2000 o después', () => {
    expect(filtrarMasRecientes(films)).toEqual(
      [{
        "title": "Porco Rosso",
        "director": "Yoshifumi Kondō",
        "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/41/Porco_Rosso.jpg",
        "release_date": "2002",
        "rt_score": "94",
      }]);
  });
})

describe('Test que filtra films lanzados del año 1990 a 1999', () => {
  it('Debería devolver un array de objetos con los films lanzados a partir del año 1990 a 1999', () => {
    expect(filtrarRecientes(films)).toEqual(
      [{
        "title": "My Neighbor Totoro",
        "director": "Isao Takahata",
        "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
        "release_date": "1998",
        "rt_score": "93",
      }]);
  });
})

describe('Test que filtra films lanzados del año 1980 a 1989', () => {
  it('Debería devolver un array de objetos con los films lanzados a partir del año 1980 a 1989', () => {
    expect(filtrarMenosRecientes(films)).toEqual(
      [{
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
        "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
        "release_date": "1986",
        "rt_score": "75",
      }]);
  });
})

describe('Test que filtra films más populares', () => {
  it('Debería devolver un array de objetos con los films con score mayor a 90', () => {
    expect(filtrarMasPopulares(films)).toEqual(
      [{
        "title": "My Neighbor Totoro",
        "director": "Isao Takahata",
        "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
        "release_date": "1998",
        "rt_score": "93",
      },
      {
        "title": "Porco Rosso",
        "director": "Yoshifumi Kondō",
        "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/41/Porco_Rosso.jpg",
        "release_date": "2002",
        "rt_score": "94",
      }]);
  });
})

describe('Test que filtra films menos populares', () => {
  it('Debería devolver un array de objetos con los films con score menor de 90', () => {
    expect(filtrarMenosPopulares(films)).toEqual(
      [{
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
        "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
        "release_date": "1986",
        "rt_score": "75",
      }]);
  });
})