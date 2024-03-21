import { crearTarjetas } from "./card.js";

const axios = require("axios");

const contenedorEstrenos = document.getElementById("estrenos-container");
const contenedorRecomendados = document.getElementById(
  "recomendados-container"
);
const contenedorTarjetas = document.getElementById("tarjetas-container");

axios
  .get("http://localhost:3000/movies/")
  .then((response) => {
    const data = response.data;

    
    crearTarjetas(contenedorEstrenos, data);

  
    crearTarjetas(contenedorRecomendados, data);

   
    crearTarjetas(contenedorTarjetas, data);
  })
  
  .catch((error) => {
    console.error("Error al obtener datos de pelis:", error);
  });
