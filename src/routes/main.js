const express = require("express");
const mainControllers = require("../controllers/mainControllers.js");
const router = express.Router();

router.get("/", mainControllers.index);
router.get("/about", mainControllers.about);
 
module.exports = router;

