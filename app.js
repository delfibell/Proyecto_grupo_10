const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));
const mainRoutes = require("./src/routes/main");

app.listen(3000, () => {
  console.log("Servidor funcionando");
});

app.use("/", mainRoutes);

app.get("/detalle-de-producto", (req, res) => {
  res.sendFile(
    path.join(__dirname, "/src/views/products/detalle-de-producto.html")
  );
});

app.get("/registro", (req, res) => {
  res.sendFile(
    path.join(__dirname, "/src/views/users/formularioDeRegistro.html")
  );
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/src/views/users/formularioDeLogin.html"));
});

app.get("/carrito", (req, res) => {
  res.sendFile(path.join(__dirname, "/src/views/products/carrito.html"));
});
