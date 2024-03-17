const app = require("./src/server");
const conectarBaseDeDatos = require("./src/config/conDb");

const PORT = process.env.PORT || 3000;

// Llamamos a la función para conectar a la base de datos
conectarBaseDeDatos()
  .then(() => {
    // Una vez que se establece la conexión, iniciamos el servidor npm y esperar
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error al iniciar el servidor:", err);
  });
