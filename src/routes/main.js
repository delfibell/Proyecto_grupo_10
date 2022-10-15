const express = require("express");
const path = require("path");
const mainControllers = require("../controllers/mainControllers");
const router = express.Router();

router.get("/", mainControllers.index)
 
module.exports = router

