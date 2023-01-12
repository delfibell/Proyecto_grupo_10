const express = require("express"); //requerimiento de express
const router = express.Router(); //necesario para poder usar los metodos GET, POST, PUT, DELETE

//controladores
const usersControllers = require("../controllers/usersControllers.js"); //requerimiento del controlador

//middlewares
const validateCreateForm = require("../middlewares/validateRegisterMiddleware")
const uploadFile = require('../middlewares/multerMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


//Formulario de registro
router.get("/register", guestMiddleware, usersControllers.registro); //direccionamiento al archivo del controlador requerido segun la url del browser
//Procesamiento del registro
router.post("/register", uploadFile.single("profilePic"), validateCreateForm, usersControllers.procesoRegistro); 
//Formulario de login
router.get("/login", guestMiddleware, usersControllers.login); //direccionamiento al archivo del controlador requerido segun la url del browser
//Procesamiento del login
router.post("/login", usersControllers.procesoLogin);
//Usuario logueado - eventualmente lleva a perfil
router.get('/mi-garage', authMiddleware, usersControllers.profile);
// Logout
router.get("/logout/", usersControllers.logout);

module.exports = router; //necesario para poder requerirlo desde app.js