const express = require("express"); //requerimiento de express
const usersControllers = require("../controllers/usersControllers.js"); //requerimiento del controlador
const router = express.Router(); //necesario para poder usar los metodos GET, POST, PUT, DELETE

router.get("/registro", usersControllers.registro); //direccionamiento al archivo del controlador requerido segun la url del browser
router.get("/login", usersControllers.login); //direccionamiento al archivo del controlador requerido segun la url del browser
 
 
module.exports = router; //necesario para poder requerirlo desde app.js