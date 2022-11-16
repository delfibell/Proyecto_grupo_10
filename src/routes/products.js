const express = require("express");
const productsControllers = require("../controllers/productsControllers.js");
const router = express.Router();
const multer  = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/img")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

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
router.put("/edit/:id", upload.any(), productsControllers.modificarProducto)

//ruta para eliminar producto
router.get("/:id/delete", productsControllers.eliminarProducto)

//ruta: /products/:id (DELETE) - Acción de borrado
router.delete("/:id", productsControllers.destruirProducto)
 
module.exports = router;