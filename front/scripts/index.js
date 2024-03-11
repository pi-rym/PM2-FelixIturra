// importamos la función crearTarjetas desde card.js
import { crearTarjetas } from "./card.js";

// en esta parte vamos a crear tarjetas de películas para distintas secciones
const contenedorEstrenos = document.getElementById("estrenos-container");
const contenedorRecomendados = document.getElementById(
  "recomendados-container"
);
const contenedorTarjetas = document.getElementById("tarjetas-container");

// hacemos una solicitud para obtener información de películas desde una URL
$.get("https://students-api.2.us-1.fl0.io/movies", function (data) {
  // creamos tarjetas para la sección de estrenos
  crearTarjetas(contenedorEstrenos, data);

  // creamos tarjetas para la sección de recomendados
  crearTarjetas(contenedorRecomendados, data);

  // creamos tarjetas para el contenedor principal
  crearTarjetas(contenedorTarjetas, data);
});
