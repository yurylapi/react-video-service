export default (films, openedFilmId) =>
    films.find((film) => film.id === openedFilmId);
