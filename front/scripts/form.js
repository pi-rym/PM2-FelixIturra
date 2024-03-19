document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("movieForm");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post("/movies", formDataObject);
      console.log("Película creada:", response.data);
      alert("Película creada exitosamente.");
      form.reset();
    } catch (error) {
      console.error("Error al crear película:", error);
      alert("Error al crear película. Por favor, inténtalo de nuevo.");
    }
  });

  // Obtener referencias a los checkboxes de género
  const genreCheckboxes = document.querySelectorAll('input[name="genre"]');

  // Obtener referencia al div donde se mostrarán los géneros seleccionados
  const selectedGenresInput = document.getElementById("selectedGenres");

  // Agregar listeners a los checkboxes para detectar cambios
  genreCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", showSelectedGenres);
  });

  // Función para mostrar los géneros seleccionados
  function showSelectedGenres() {
    // Filtrar los checkboxes seleccionados y obtener sus valores
    const selectedGenres = Array.from(genreCheckboxes)
      .filter(function (checkbox) {
        return checkbox.checked;
      })
      .map(function (checkbox) {
        return checkbox.value;
      });

    // Mostrar los géneros seleccionados en el campo de entrada de texto
    selectedGenresInput.value = selectedGenres.join(", ");
    console.log("Géneros seleccionados:", selectedGenres); // Agregar impresión de consola
  }

  // Función para manejar el evento de limpieza del formulario
  function handleReset() {
    form.reset();
    selectedGenresInput.value = "";
  }

  // Agregar evento de limpieza al botón de limpiar
  const resetButton = document.querySelector('button[type="reset"]');
  resetButton.addEventListener("click", handleReset);

  // Función para manejar el evento de envío del formulario
  function handleSubmit(event) {
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());

    // Validar que todos los campos del formulario estén completos
    const requiredFields = [
      "title",
      "year",
      "director",
      "duration",
      "rate",
      "poster",
    ];
    const isValid = requiredFields.every(function (field) {
      return formDataObject[field].trim() !== "";
    });

    if (!isValid) {
      alert("Por favor, completa todos los campos del formulario.");
      event.preventDefault(); // Evitar el envío del formulario si no es válido
    }
  }

  // Agregar evento de envío al formulario
  form.addEventListener("submit", handleSubmit);
});
