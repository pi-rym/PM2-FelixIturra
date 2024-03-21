const app = require("./src/server");
const conectarBaseDeDatos = require("./src/config/conDb");

const PORT = process.env.PORT || 3000;


conectarBaseDeDatos()
  .then(() => {
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error al iniciar el servidor:", err);
  });
