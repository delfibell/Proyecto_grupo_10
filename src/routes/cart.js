const express = require("express");
const productsControllers = require("../controllers/cartControllers.js");
const router = express.Router();

router.get("/carrito", cartControllers.carrito);
 
module.exports = router;