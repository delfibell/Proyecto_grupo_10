const express = require("express");
const usersControllers = require("../controllers/usersControllers.js");
const router = express.Router();

router.get("/registro", usersControllers.registro);
router.get("/login", usersControllers.login);
 
module.exports = router;