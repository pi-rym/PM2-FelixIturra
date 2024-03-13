const axios = require("axios");

async function getMovies() {
  try {
    const response = await axios.get(
      "https://students-api.up.railway.app/movies"
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener datos de películas:", error);
    return [];
  }
}

module.exports = {
  getMovies,
};
