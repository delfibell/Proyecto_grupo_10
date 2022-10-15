const path = require("path");

let productsControllers = {
  detalleProducto: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/products/detalleDeProducto.html"));
  },

  carrito: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/products/carrito.html"));
  },
};

module.exports = productsControllers;