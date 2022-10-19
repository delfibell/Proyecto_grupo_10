const path = require("path");

let cartControllers = {
 
  carrito: (req, res) => {
    res.render("products/carrito");
  },
};

module.exports = cartControllers;