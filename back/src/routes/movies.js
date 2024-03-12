// primero, importamos la librería Express y creamos un enrutador para manejar las rutas
const express = require("express");
const router = express.Router();

// luego, definimos una ruta GET que responde con un mensaje indicando que próximamente estarán disponibles los datos de películas
router.get("/", (req, res) => {
  res.send("Próximamente estarán disponibles los datos de películas.");
});

// finalmente, exportamos el enrutador para que pueda ser utilizado en otros archivos
module.exports = router;
