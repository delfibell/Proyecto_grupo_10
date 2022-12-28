const express = require("express"); //requerimiento de express
const usersControllers = require("../controllers/usersControllers.js"); //requerimiento del controlador
const router = express.Router(); //necesario para poder usar los metodos GET, POST, PUT, DELETE
const multer = require("multer");


const storage = multer.diskStorage({  //recibe un objeto literal compuesto de dos metodos, destination y filename
    destination: function (req, file, cb) {
      cb(null, "./public/img/users")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage })

router.get("/register", usersControllers.registro); //direccionamiento al archivo del controlador requerido segun la url del browser
router.post("/register", upload.single("profilePic"), usersControllers.store); 
router.get("/login", usersControllers.login); //direccionamiento al archivo del controlador requerido segun la url del browser
 
 
module.exports = router; //necesario para poder requerirlo desde app.js