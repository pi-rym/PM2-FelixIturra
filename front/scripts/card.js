// Exportamos la función crearTarjetas para que pueda ser importada en index.js
export function crearTarjetas(container, data) {
  // chequeamos si la solicitud funcionó
  if (Array.isArray(data)) {
    // si funcionó, recorremos la información y creamos una tarjeta para cada película
    data.forEach((movie) => {
      // aquí creamos una tarjeta
      const card = document.createElement("div");
      card.classList.add("card");

      // aquí configuramos el contenido de la tarjeta utilizando la información de la película
      const cardContent = `
                <div class="card__front">
                    <img src="${movie.poster}" alt="${
        movie.title
      }" class="movie-poster">
                </div>
                <div class="card__content">
                    <h2 class="card__title">${movie.title}</h2>
                    <p class="card__description">Año: ${movie.year}</p>
                    <p class="card__description">Director: ${movie.director}</p>
                    <p class="card__description">Duración: ${movie.duration}</p>
                    <p class="card__description">Género: ${movie.genre.join(
                      ", "
                    )}</p>
                    <p class="card__description">Puntuación: ${movie.rate}</p>
                </div>
            `;

      // insertamos el contenido en la tarjeta
      card.innerHTML = cardContent;

      // añadimos la tarjeta al contenedor
      container.appendChild(card);
    });
  } else {
    // si algo salió mal, mostramos un mensaje de error en la consola
    console.error("Error: No se pudieron obtener los datos de las películas.");
  }
}
