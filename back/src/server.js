const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const movieService = require("./services/movieService");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.get("/movies", async (req, res) => {
  try {
    const movies = await movieService.getMovies();
    res.status(200).json(movies);
  } catch (error) {
    console.error("Error al obtener películas:", error);
    res.status(500).json({ error: "Error al obtener películas" });
  }
});

module.exports = app;
