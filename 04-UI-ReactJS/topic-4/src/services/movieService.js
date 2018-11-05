export default {

    getAll() {
      return JSON.parse(localStorage.getItem("movies")) || [];
    },
  
    saveAll(movies) {
      localStorage.setItem("movies", JSON.stringify(movies));
    },
  
    change(newMovie) {
  
      let movies = this.getAll();
      
      let toChange = movies.find(movie => movie.id === newMovie.id);
      let idx = movies.indexOf(toChange);
      movies[idx] = newMovie;
  
      this.saveAll(movies);
    },
    
    nextId() {
      let movies = this.getAll();
      let idx = 0;

      for(let key of movies.keys()) {
        idx = (key + 1);
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