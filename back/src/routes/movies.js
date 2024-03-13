const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Próximamente estarán disponibles los datos de películas.");
});

module.exports = router;
