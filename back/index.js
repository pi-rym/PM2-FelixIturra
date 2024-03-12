// punto de entrada de nuestra aplicación
// aquí importamos nuestra aplicación Express desde el archivo server.js dentro de la carpeta src
const app = require("./src/server");

// configuramos el puerto en el que nuestro servidor va a escuchar las solicitudes

const PORT = process.env.PORT || 3000;

// hacemos que nuestro servidor escuche las solicitudes entrantes en el puerto especificado
// cuando el servidor comienza a escuchar, mostramos un mensaje en la consola indicando en qué puerto está corriendo
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
