const express = require("express"); //requerimiento de express
const notFoundControllers = require("../controllers/notFoundControllers.js"); //requerimiento del controlador
const router = express.Router(); //necesario para poder usar los metodos GET, POST, PUT, DELETE

router.get("/", notFoundControllers.notFound); 

module.exports = router; //necesario para poder requerirlo desde app.js