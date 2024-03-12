// aquí estamos importando la librería express, que nos permite crear nuestro servidor web
const express = require("express");
// creamos una instancia de la aplicación express, que es como nuestro servidor
const app = express();
// importamos el enrutador de películas que definimos en otro archivo
const moviesRouter = require("./routes/movies");

// le decimos a nuestra aplicación que utilice el enrutador de películas cuando se acceda a la ruta "/movies"
app.use("/movies", moviesRouter);

// importamos el controlador de películas que también definimos en otro archivo
const moviesController = require("./controllers/moviesController");
// configuramos nuestra aplicación para que cuando alguien acceda a la ruta "/movies" se ejecute el método getMovies del controlador
app.get("/movies", moviesController.getMovies);

// exportamos nuestra aplicación para poder usarla en otros archivos, como en el index.js
module.exports = app;
