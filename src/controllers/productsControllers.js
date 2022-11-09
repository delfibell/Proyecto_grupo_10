const path = require("path");
const fs = require('fs')
const productsFilePath = path.join(__dirname,'../data/Products.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, "UTF-8"))

let productsControllers = {
  listarProductos: (req,res) => {
    res.render("products/listadoDeProductos",{products:products} )
  },
  detalleProducto: (req, res) => {
    let idProducto = req.params.id
    let product = products.find(product => product.id == idProducto) 
    res.render("products/detalleDeProducto", {product:product})
  },
  crearProducto: (req, res) => {
    res.render("products/creacionProducto")
  },
  store: (req,res) => {
    let newProduct = {
      id: Date.now(), 
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      category: req.body.category,
      fragance: req.body.fragance,
      size: req.body.size,
      price: Number(req.body.price),
      discount: Number(req.body.discount),
      type: req.body.type
    }
    products.push(newProduct)
    fs.writeFileSync(productsFilePath,JSON.stringify(products, null, ""))
    res.redirect("/products")
  },
  editarProducto: (req, res) => {
    let idProducto = req.params.id
    let product = products.find(product => product.id == idProducto) 
    res.render("products/edicionProducto", {product:product})
  },
  modificarProducto: (req,res) =>{
    let idProducto = req.params.id
    let product = products.find(product => product.id == idProducto) 
    product.name = req.body.name
    product.description = req.body.description
    product.image = ""
    if(req.files){
      if(req.files.image){
        product.image = req.file.image
      }
    }
    product.category = req.body.category
    product.fragance = req.body.fragance
    product.size = req.body.size
    product.price = req.body.price
    product.discount = req.body.discount
    product.type = req.body.type
    // error en la redirección
    res.redirect("/products/" + idProducto)
  },
  eliminarProducto: (req,res) => {
    let idProducto = req.params.id;
    products = products.filter(product => product.id !== idProducto)
    res.render("/products")
  }
};

module.exports = productsControllers;