const express = require("express"); //requerimiento de express
const productsControllers = require("../controllers/productsControllers.js"); //requerimiento del controlador
const router = express.Router(); //necesario para poder usar los metodos GET, POST, PUT, DELETE
const multer  = require('multer'); //a diferencia de otros paquetes se requiere en el lugar donde lo vas a usar, en este caso queremos procesar lo que viene del formulario entonces lo requerimos aca

//diskStorage sirve para definir donde vamos a almacenar los archivos que vamos a procesar y que nombre le vamos a dar a los mismos, es necesario almacenarla en una variable para luego poder usarla
const storage = multer.diskStorage({  //recibe un objeto literal compuesto de dos metodos, destination y filename
  destination: function (req, file, cb) {
    cb(null, "./public/img")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

const authMiddleware = require('../middlewares/authMiddleware');

// ruta: /products (GET) - Listado de productos
router.get("/", productsControllers.listarProductos);

// ruta: /products/create (GET) - Formulario de creación de productos
router.get("/create", authMiddleware, productsControllers.crearProducto); //cambiar ruta en los href

//ruta: /products (POST) - Acción de creación (a donde se envía el formulario)
router.post("/", upload.any("image"), authMiddleware, productsControllers.store)

//ruta: /products/:id (GET) - Detalle de un producto particular
router.get("/:id", productsControllers.detalleProducto);

// ruta: /products/:id/edit (GET) - Formulario de edición de productos
router.get("/edit/:id", authMiddleware, productsControllers.editarProducto)

//ruta: /products/:id (PUT) - Acción de edición (a donde se envía el formulario):
router.put("/edit/:id", upload.any("image"), authMiddleware, productsControllers.modificarProducto)

//ruta para eliminar producto
router.get("/:id/delete", authMiddleware, productsControllers.eliminarProducto)

//ruta: /products/:id (DELETE) - Acción de borrado
router.delete("/:id", authMiddleware, productsControllers.destruirProducto)
 
module.exports = router;