const express = require("express");
const productsControllers = require("../controllers/productsControllers.js");
const router = express.Router();

router.get("/detalle", productsControllers.detalleProducto);
router.get("/crear", productsControllers.crearProducto);
router.get("/editar", productsControllers.editarProducto)
 
module.exports = router;