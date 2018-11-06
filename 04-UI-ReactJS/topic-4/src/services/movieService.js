export default {

  getAll() {
    return JSON.parse(localStorage.getItem("movies")) || [];
  },

  saveAll(movies) {
    localStorage.setItem("movies", JSON.stringify(movies));
  },

  delete(id) {
    let movies = this.getAll();

    let toDelete = movies.find(movie => movie.id === id);
    movies.splice(movies.indexOf(toDelete), 1);

    this.saveAll(movies);
  },

  change(newMovie) {

    let movies = this.getAll();

    let toChange = movies.find(movie => movie.id === newMovie.id);
    let idx = movies.indexOf(toChange);
    movies[idx] = newMovie;

    this.saveAll(movies);
  },

  getOne(id) {
    let movies = this.getAll();
    let movie = movies.find(movie => movie.id === id);

    return movie;
  },

  nextId() {
    let movies = this.getAll();
    let idx = 0;

    if (movies.length > 0) {
      idx = (movies[movies.length-1].id) + 1 ;
    }

    return idx;
  },

  save(title, year, duration, id) {
    let movies = this.getAll();

    let newMovie = {
      title: title,
      year: year,
      duration: duration,
      id: id
    }

    movies.push(newMovie);
    this.saveAll(movies);
  }

}