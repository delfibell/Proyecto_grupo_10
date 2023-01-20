const path = require("path");
const fs = require('fs')
let db = require("../database/models");
const { devNull } = require("os");

let productsControllers = {
  listarProductos: (req,res) => {
    db.Products.findAll()
     .then(function(products) {
        res.render("products/listadoDeProductos",{products:products})
     })   
  },
  detalleProducto: (req, res) => {
    db.Products.findByPk(req.params.id)
    .then(function(product) {
      res.render("products/detalleDeProducto", {product:product})
    })
  },
  crearProducto: (req, res) => {
    res.render("products/creacionProducto")
  },
  store: (req,res) => {
    db.Products.create({
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      fragance: req.body.fragance,
      size: req.body.size,
      price: Number(req.body.price),
      discount: Number(req.body.discount),
      Idtype: "", //req.body.type,
    })
    res.redirect("/products")
  },
  editarProducto: (req, res) => {
    db.Products.findByPk(req.params.id)
    .then(function(product) {
      res.render("products/edicionProducto", {product:product})
    })
  },
  modificarProducto: (req,res) =>{
    db.Products.update({
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      fragance: req.body.fragance,
      size: req.body.size,
      price: Number(req.body.price),
      discount: Number(req.body.discount),
      type: req.body.type,
      description: req.body.description,

    }, {
      where: {id : req.params.id}
    })
    res.redirect("/products/" + idProducto)
  
// asi teniamos lo de la imagen antes
    product.image = ""
    if(req.files){
      if(req.files.image){
        product.image = req.file.image
      }
    }
  },
  eliminarProducto: (req,res) => {
    db.Products.findByPk(req.params.id)
    .then(function(product) {
      res.render("products/edicionProducto", {product:product})
    })
  },
  destruirProducto: (req, res) => {
    db.Products.destroy({
      where: {id: req.params.id}
    })
    res.redirect('/products');
}
};

module.exports = productsControllers;