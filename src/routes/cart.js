const express = require("express");
const cartControllers = require("../controllers/cartControllers.js");
const router = express.Router();

router.get("/", cartControllers.carrito);
 
module.exports = router;