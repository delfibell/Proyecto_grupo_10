const express = require("express"); //requerimiento de express
const cartControllers = require("../controllers/cartControllers.js"); //requerimiento del controlador
const router = express.Router(); //necesario para poder usar los metodos GET, POST, PUT, DELETE

const authMiddleware = require('../middlewares/authMiddleware');

router.get("/", authMiddleware, cartControllers.carrito); //direccionamiento al archivo del controlador requerido segun la url del browser
 
module.exports = router; //necesario para poder requerirlo desde app.js