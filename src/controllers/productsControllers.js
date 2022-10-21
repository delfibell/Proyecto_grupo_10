const path = require("path");

let productsControllers = {
  detalleProducto: (req, res) => {
    res.render("products/detalleDeProducto")
  },
  crearProducto: (req, res) => {
    res.render("products/creacionProducto")
  },
  editarProducto: (req, res) => {
    res.render("products/edicionProducto")
  },
};

module.exports = productsControllers;