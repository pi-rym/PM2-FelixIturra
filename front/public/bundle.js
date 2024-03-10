(() => {
  "use strict";
  function e(e, n) {
    Array.isArray(n)
      ? n.forEach((n) => {
          const t = document.createElement("div");
          t.classList.add("card");
          const r = `\n                <div class="card__front">\n                    <img src="${
            n.poster
          }" alt="${
            n.title
          }" class="movie-poster">\n                </div>\n                <div class="card__content">\n                    <h2 class="card__title">${
            n.title
          }</h2>\n                    <p class="card__description">Año: ${
            n.year
          }</p>\n                    <p class="card__description">Director: ${
            n.director
          }</p>\n                    <p class="card__description">Duración: ${
            n.duration
          }</p>\n                    <p class="card__description">Género: ${n.genre.join(
            ", "
          )}</p>\n                    <p class="card__description">Puntuación: ${
            n.rate
          }</p>\n                </div>\n            `;
          (t.innerHTML = r), e.appendChild(t);
        })
      : console.error(
          "Error: No se pudieron obtener los datos de las películas."
        );
  }
  const n = document.getElementById("estrenos-container"),
    t = document.getElementById("recomendados-container"),
    r = document.getElementById("tarjetas-container");
  $.get("https://students-api.2.us-1.fl0.io/movies", function (s) {
    e(n, s), e(t, s), e(r, s);
  });
})();
