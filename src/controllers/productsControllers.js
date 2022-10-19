const path = require("path");

let productsControllers = {
  detalleProducto: (req, res) => {
    res.render("products/detalleDeProducto")
  },
};

module.exports = productsControllers;