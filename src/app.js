//app.js

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Pagina de Inicio de la App");
});

module.exports = app;
