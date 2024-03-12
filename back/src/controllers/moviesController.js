// Esta parte del código define una función llamada getMovies.
// Lo que hace es enviar una respuesta al cliente con un código de estado 200, que significa "OK" y un mensaje indicando que proximamente estaran disponibles los datos de películas.
// En resumen, cuando el cliente acceda a la ruta correspondiente, esta función se ejecutará y le enviará un mensaje.
exports.getMovies = (req, res) => {
  res
    .status(200) // Establecemos el código de estado de la respuesta como 200 (OK)
    .send("Próximamente estarán disponibles los datos de películas."); // Enviamos el mensaje al cliente
};
