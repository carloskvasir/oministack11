const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({
    evento: "Semana Oministack 11.0",
    aluno: "Carlos Lima Kvasir"
  });
});

app.listen(3333);
