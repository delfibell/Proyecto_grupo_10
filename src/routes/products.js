const express = require("express");
const productsControllers = require("../controllers/productsControllers.js");
const router = express.Router();

router.get("/detalle-de-producto", productsControllers.detalleProducto);
 
module.exports = router;