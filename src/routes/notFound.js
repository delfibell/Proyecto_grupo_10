const express = require("express");
const notFoundControllers = require("../controllers/notFoundControllers.js");
const router = express.Router();

router.get("/", notFoundControllers.notFound);
 
module.exports = router;