// Primero, obtenemos el contenedor donde vamos a mostrar las tarjetas de películas
const tarjetasContainer = document.getElementById("tarjetas-container");

// Luego, hacemos una solicitud HTTP GET para obtener datos de películas desde una URL
$.get("https://students-api.2.us-1.fl0.io/movies", function (data) {
  // Verificamos si la solicitud fue exitosa
  if (Array.isArray(data)) {
    // Si la solicitud fue exitosa, recorremos los datos y creamos tarjetas para cada película
    data.forEach((movie) => {
      // Creamos un elemento de tarjeta
      const card = document.createElement("div");
      card.classList.add("card");

      // Construimos el contenido de la tarjeta utilizando los datos de la película
      const cardContent = `
                <div class="card__front">
                    <img src="${movie.poster}" alt="${
        movie.title
      }" class="movie-poster">
                </div>
                <div class="card__content">
                    <h2 class="card__title">${movie.title}</h2>
                    <p class="card__description">Year: ${movie.year}</p>
                    <p class="card__description">Director: ${movie.director}</p>
                    <p class="card__description">Duration: ${movie.duration}</p>
                    <p class="card__description">Genre: ${movie.genre.join(
                      ", "
                    )}</p>
                    <p class="card__description">Rate: ${movie.rate}</p>
                </div>
            `;

      // Insertamos el contenido en la tarjeta
      card.innerHTML = cardContent;

      // Agregamos la tarjeta al contenedor
      tarjetasContainer.appendChild(card);
    });
  } else {
    // Si no se pudieron obtener los datos, mostramos un mensaje de error en la consola
    console.error("Error: No se pudieron obtener los datos de las películas.");
  }
});
