// importamos una función especial llamada 'crearTarjetas' desde otro archivo llamado 'card.js'.
import { crearTarjetas } from "./card.js";

// usamos una herramienta que se llama 'axios' para hacer pedidos de datos desde otra parte de Internet.
const axios = require("axios");

// aquí estamos buscando en el código HTML los lugares donde queremos mostrar las tarjetas de pelis.
// uno es para las pelis recién estrenadas, otro para las recomendadas y otro para todas las demás.
const contenedorEstrenos = document.getElementById("estrenos-container");
const contenedorRecomendados = document.getElementById(
  "recomendados-container"
);
const contenedorTarjetas = document.getElementById("tarjetas-container");

// ahora vamos a pedirle a Internet info sobre pelis.
axios
  .get("https://students-api.up.railway.app/movies")
  // cuando obtengamos la info con éxito, vamos a hacer algunas cosas con esos datos.
  .then((response) => {
    // guardamos los datos de las pelis en una variable llamada 'data'.
    const data = response.data;

    // luego, usamos esos datos para crear tarjetas de pelis y mostrarlas en diferentes lugares de la página.
    // primero, creamos tarjetas para pelis recién estrenadas.
    crearTarjetas(contenedorEstrenos, data);

    // luego, creamos tarjetas para pelis recomendadas.
    crearTarjetas(contenedorRecomendados, data);

    // y finalmente, creamos tarjetas para todas las demás pelis.
    crearTarjetas(contenedorTarjetas, data);
  })
  // si algo sale mal mientras obtenemos los datos, mostramos un mensaje de error en la consola.
  .catch((error) => {
    console.error("Error al obtener datos de pelis:", error);
  });
