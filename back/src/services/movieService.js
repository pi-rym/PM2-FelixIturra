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

exports.createMovie = async (movieData) => {
  try {
    const newMovie = new Movie(movieData);
    const savedMovie = await newMovie.save();
    return savedMovie;
  } catch (error) {
    throw new Error("Error creating movie");
  }
};

module.exports = {
  getMovies,
};
