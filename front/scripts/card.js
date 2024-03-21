
export function crearTarjetas(container, data) {
  
  if (Array.isArray(data)) {
    
    data.forEach((movie) => {
      
      const card = document.createElement("div");
      card.classList.add("card");

     
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

     
      card.innerHTML = cardContent;

      
      container.appendChild(card);
    });
  } else {
    
    console.error("Error: No se pudieron obtener los datos de las películas.");
  }
}
