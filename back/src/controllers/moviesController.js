const movieService = require("../services/movieService");


exports.getMovies = async (req, res) => {
  try {
    const movies = await movieService.getMovies();
    res.status(200).json(movies);
  } catch (error) {
    console.error("Error al obtener películas:", error);
    res.status(500).json({ error: "Error al obtener películas" });
  }
};


exports.createMovie = async (req, res) => {
  console.log(req.body); 

  try {
    const { title, year, director, duration, genre, rate, poster } = req.body;

    
    if (
      !title ||
      !year ||
      !director ||
      !duration ||
      !genre ||
      !rate ||
      !poster
    ) {
      return res
        .status(400)
        .json({ error: "Todos los campos son obligatorios" });
    }

 
    const newMovie = await movieService.createMovie({
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });

    res.status(201).json(newMovie);
  } catch (error) {
    console.error("Error al crear película:", error);
    res.status(500).json({ error: "Error al crear película" });
  }
};
