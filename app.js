const express = require("express"); //requerimiento de express para poder usarlo
const path = require("path"); //requerimiento del metodo path de express para usarlo
const session = require('express-session');
const cookies = require('cookie-parser');


//requerimiento de todas las rutas
const mainRoutes = require("./src/routes/main");
const productsRoutes = require("./src/routes/products");
const usersRoutes = require("./src/routes/users");
const cartRoutes = require("./src/routes/cart");
const notFoundRoutes = require("./src/routes/notFound")

const methodOverride = require('method-override'); //requerimiento del metodo override para poder utilizar PUT
const app = express(); //necesario para poder usar todos los metodos de express que aparecen abajo

const loggedMiddleware = require('./src/middlewares/loggedMiddleware');

app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));

app.use(cookies());

app.use(loggedMiddleware);

app.use(express.urlencoded({ extended: true })); //es lo que nos permite procesar los formularios
app.use(express.static(path.join(__dirname, "public"))); //definicion de carpeta de archivos estaticos
app.use(methodOverride('_method')); //necesario para poder utilizar PUT
app.use(express.json()) //necesario para poder leer archivos JSON
app.set("view engine", "ejs") //necesario para poder usar vistas .ejs
app.set("views", path.join(__dirname, "src/views")) //definicion de carpetas donde estan todas las vistas

app.listen(3030, () => {
  console.log("Servidor funcionando"); //metodo listen para levantar el servidor en el localhost
});


//direccionamiento hacia todos los archivos de rutas requeridos segun la url del browser
app.use("/", mainRoutes);
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.use("/carrito", cartRoutes);
app.use("/*", notFoundRoutes);

