const path = require("path");

let productsControllers = {
  detalleProducto: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/products/detalle-de-producto.html"));
  },

  carrito: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/products/carrito.html"));
  },
};

module.exports = productsControllers;