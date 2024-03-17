const Movie = require("../models/movieModel");

async function getMovies() {
  try {
    const movies = await Movie.find();
    return movies;
  } catch (error) {
    throw new Error(
      "Error al obtener las películas de la base de datos:",
      error
    );
  }
}

module.exports = {
  getMovies,
};
