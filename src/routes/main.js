const express = require("express");
const mainControllers = require("../controllers/mainControllers.js");
const router = express.Router();

router.get("/", mainControllers.index);
 
module.exports = router;

