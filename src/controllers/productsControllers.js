const path = require("path");

let productsControllers = {
  listarProductos: (req,res) => {
    res.render("products/listadoDeProductos")
  },
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