const express = require("express"); //requerimiento de express
const mainControllers = require("../controllers/mainControllers.js"); //requerimiento del controlador
const router = express.Router(); //necesario para poder usar los metodos GET, POST, PUT, DELETE

router.get("/", mainControllers.index); //direccionamiento al archivo del controlador requerido segun la url del browser
router.get("/about", mainControllers.about); //direccionamiento al archivo del controlador requerido segun la url del browser
 
module.exports = router; //necesario para poder requerirlo desde app.js

