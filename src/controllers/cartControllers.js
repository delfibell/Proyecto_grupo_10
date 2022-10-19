const path = require("path");

let cartControllers = {
 
  carrito: (req, res) => {
    res.render("cart/carrito");
  },
};

module.exports = cartControllers;