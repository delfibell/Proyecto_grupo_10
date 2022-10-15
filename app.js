const express = require("express");
const path = require("path");
const mainRoutes = require("./src/routes/main");
const productsRoutes = require("./src/routes/products");
const usersRoutes = require("./src/routes/users");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Servidor funcionando");
});

app.use("/", mainRoutes);

app.use("/productos", productsRoutes);

app.use("/usuarios", usersRoutes);

app.use("/*", (req, res) => {
  res.send("Página no encontrada");
});
