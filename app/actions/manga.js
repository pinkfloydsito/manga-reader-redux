export const ADD_MANGA = 'ADD_MANGA';
export const FILL_MANGAS = 'FILL_MANGAS';


export function addManga(name, description) {
  return {
      type: ADD_MANGA,
      payload: {name: name, description: description, completed: false}
  };
}


export function fillMangas(mangas = []) {
  return {
      type: FILL_MANGAS,
      payload: mangas
  };
}