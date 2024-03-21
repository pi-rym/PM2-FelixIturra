const path = require("path");

module.exports = {
  entry: {
    index: "./scripts/index.js", 
    form: "./scripts/form.js", 
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js",
  },
};
