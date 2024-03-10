// Importamos la función crearTarjetas desde card.js
import { crearTarjetas } from "./card.js";

// Parte 2: Llamadas para crear tarjetas de películas en secciones específicas
const estrenosContainer = document.getElementById("estrenos-container");
const recomendadosContainer = document.getElementById("recomendados-container");
const tarjetasContainer = document.getElementById("tarjetas-container");

// hacemos una solicitud para obtener información de películas desde una URL
$.get("https://students-api.2.us-1.fl0.io/movies", function (data) {
  // creamos tarjetas para la sección de estrenos
  crearTarjetas(estrenosContainer, data);

  // creamos tarjetas para la sección de recomendados
  crearTarjetas(recomendadosContainer, data);

  // creamos tarjetas para el contenedor principal
  crearTarjetas(tarjetasContainer, data);
});
