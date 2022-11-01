const express = require("express");
const path = require("path");
const mainRoutes = require("./src/routes/main");
const productsRoutes = require("./src/routes/products");
const usersRoutes = require("./src/routes/users");
const cartRoutes = require("./src/routes/cart");
const notFoundRoutes = require("./src/routes/notFound")
const methodOverride = require('method-override');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'));
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "src/views"))

app.listen(3000, () => {
  console.log("Servidor funcionando");
});

app.use("/", mainRoutes);

app.use("/products", productsRoutes);

app.use("/usuarios", usersRoutes);

app.use("/carrito", cartRoutes);

app.use("/*", notFoundRoutes);

app.get('/lista', (req, res) => {   // parametro1 ('/') : pad,   // parametro2 : callback que obtiene como argumentos dos argumentos (req,res)
  res.sendFile(path.join(__dirname, '/views/productos.html') )
}); 

