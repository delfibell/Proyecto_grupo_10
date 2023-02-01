const express = require("express"); //requerimiento de express
const productsControllers = require("../controllers/productsControllers.js"); //requerimiento del controlador
const router = express.Router(); //necesario para poder usar los metodos GET, POST, PUT, DELETE

//diskStorage sirve para definir donde vamos a almacenar los archivos que vamos a procesar y que nombre le vamos a dar a los mismos, es necesario almacenarla en una variable para luego poder usarla
const uploadFile = require("../middlewares/multerProductmiddleware");

const adminLoggedMiddleware = require("../middlewares/adminLoggedMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const validateCreateProduct = require("../middlewares/productMiddleware");

// ruta: /products (GET) - Listado de productos
router.get("/", productsControllers.listarProductos);

// ruta: /products/create (GET) - Formulario de creación de productos
router.get("/create", adminMiddleware, adminLoggedMiddleware, productsControllers.crearProducto); //cambiar ruta en los href

//ruta: /products (POST) - Acción de creación (a donde se envía el formulario)
router.post(
  "/",
  uploadFile.single("image"),
  adminMiddleware,
  adminLoggedMiddleware,
  validateCreateProduct,
  productsControllers.store
);

//ruta: /products/:id (GET) - Detalle de un producto particular
router.get("/:id", productsControllers.detalleProducto);

// ruta: /products/:id/edit (GET) - Formulario de edición de productos
router.get(
  "/edit/:id",
  adminMiddleware,
  adminLoggedMiddleware,
  productsControllers.editarProducto
);

//ruta: /products/:id (PUT) - Acción de edición (a donde se envía el formulario):
router.put(
  "/edit/:id",
  uploadFile.single("image"),
  adminMiddleware, 
  adminLoggedMiddleware,
  validateCreateProduct,
  productsControllers.modificarProducto
);

//ruta para eliminar producto
router.get(
  "/:id/delete",
  adminMiddleware, 
  adminLoggedMiddleware,
  productsControllers.eliminarProducto
);

//ruta: /products/:id (DELETE) - Acción de borrado
router.delete(
  "/:id",
  adminMiddleware,
  adminLoggedMiddleware,
  productsControllers.destruirProducto
);
//ruta para buscar un producto
router.post("/busqueda", productsControllers.busquedaProducto);

module.exports = router;
