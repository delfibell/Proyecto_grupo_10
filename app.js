const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));
const mainRoutes = require("./src/routes/main");
const productsRoutes = require("./src/routes/products");
const usersRoutes = require("./src/routes/users");

app.listen(3000, () => {
  console.log("Servidor funcionando");
});

app.use("/", mainRoutes);

app.use("/detalle-de-producto", productsRoutes);

app.use("/carrito", productsRoutes);

app.use("/registro", usersRoutes);

app.use("/login", usersRoutes);