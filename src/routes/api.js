const express = require("express");
const router = express.Router();
const apiControllers = require("../controllers/apiControllers");

router.get("/users", apiControllers.users);
router.get("/users/:id", apiControllers.usersDetails);
router.get("/products", apiControllers.products);
router.get("/products/:id", apiControllers.productsDetails);
router.get("/reactUsers", apiControllers.reactUsers);

module.exports = router;
