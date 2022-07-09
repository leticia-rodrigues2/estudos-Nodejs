const { response } = require("express");
const express = require("express");

const app = express();
// localhost:3333
app.get("/", (request, response) => {
  return response.json({ message: "Olá mundo !!" });
});

app.listen(3333);
