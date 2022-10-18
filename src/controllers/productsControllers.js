const path = require("path");

let productsControllers = {
  detalleProducto: (req, res) => {
    res.render("products/detalleDeProducto")
  },

  carrito: (req, res) => {
    res.render("products/carrito");
  },
};

module.exports = productsControllers;