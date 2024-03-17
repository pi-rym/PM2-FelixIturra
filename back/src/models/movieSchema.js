const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  director: String,
  duration: String,
  genre: [String],
  rate: Number,
  poster: String,
});

module.exports = movieSchema;
