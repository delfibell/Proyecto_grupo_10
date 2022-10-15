const express = require("express");
const productsControllers = require("../controllers/productsControllers.js");
const router = express.Router();

router.get("/detalle-de-producto", productsControllers.detalleProducto);
router.get("/carrito", productsControllers.carrito);
 
module.exports = router;