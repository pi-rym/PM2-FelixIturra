document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("movieForm");
  const selectedGenresInput = document.getElementById("selectedGenres");
  const genreCheckboxes = document.querySelectorAll('input[name="genre"]');
  const resetButton = document.querySelector('button[type="reset"]');

  
  resetButton.addEventListener("click", function () {
    form.reset();
    selectedGenresInput.value = "";
  });

  
  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());
    const requiredFields = [
      "title",
      "year",
      "director",
      "duration",
      "rate",
      "poster",
    ];
    const isValid = requiredFields.every(function (field) {
      return (
        formDataObject[field].trim() !== "" &&
        isValidType(field, formDataObject[field])
      );
    });

    
    const selectedGenres = Array.from(genreCheckboxes)
      .filter(function (checkbox) {
        return checkbox.checked;
      })
      .map(function (checkbox) {
        return checkbox.value;
      });

    if (!isValid || selectedGenres.length === 0) {
      alert(
        "Por favor, completa todos los campos del formulario y selecciona al menos un género."
      );
      return; 
    }

    
    const confirmed = confirm("¿Estás seguro de enviar el formulario?");
    if (!confirmed) {
      return; 
    }

    try {
      const response = await axios.post("/peliculas", formDataObject);
      console.log("Película creada:", response.data);
      alert("Película creada exitosamente.");
      form.reset();
    } catch (error) {
      console.error("Error al crear película:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
       
        alert("Error al crear película: " + error.response.data.message);
      } else if (error.request) {
       
        alert("Error de red: No se pudo conectar al servidor.");
      } else {
        
        alert("Error al crear película: Por favor, inténtalo de nuevo.");
      }
    }
  });

 
  genreCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      const selectedGenres = Array.from(genreCheckboxes)
        .filter(function (checkbox) {
          return checkbox.checked;
        })
        .map(function (checkbox) {
          return checkbox.value;
        });
      selectedGenresInput.value = selectedGenres.join(", ");
      console.log("Géneros seleccionados:", selectedGenres);
    });
  });

  
  function isValidType(field, value) {
    switch (field) {
      case "title":
      case "director":
      case "duration":
      case "poster":
        return typeof value === "string";
      case "year":
      case "rate":
        return !isNaN(value) && typeof value !== "boolean" && value !== "";
      default:
        return true;
    }
  }
});
