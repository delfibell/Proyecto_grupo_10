const express = require('express');
const router = express.Router();
const apiControllers = require("../controllers/apiControllers")

router.get('/products', apiControllers.products)

module.exports = router;