const express = require("express");
const productsControllers = require("../controllers/productsControllers.js");
const router = express.Router();

// ruta: /products (GET) - Listado de productos
router.get("/", productsControllers.listarProductos);

// ruta: /products/create (GET) - Formulario de creación de productos
router.get("/create", productsControllers.crearProducto); //cambiar ruta en los href

//ruta: /products (POST) - Acción de creación (a donde se envía el formulario)
router.post("/", productsControllers.store)

//ruta: /products/:id (GET) - Detalle de un producto particular
router.get("/:id", productsControllers.detalleProducto);

// ruta: /products/:id/edit (GET) - Formulario de edición de productos
router.get("/edit/:id", productsControllers.editarProducto)

//ruta: /products/:id (PUT) - Acción de edición (a donde se envía el formulario):
router.put("/:id", productsControllers.modificarProducto)
 
module.exports = router;