const path = require("path");
const fs = require("fs");
let db = require("../database/models");
const { Op } = require("sequelize");

let productsControllers = {
  listarProductos: (req, res) => {
    db.Products.findAll().then(function (products) {
      res.render("products/listadoDeProductos", {
        products,
      });
    });
  },
  detalleProducto: (req, res) => {
    db.Products.findByPk(req.params.id).then(function (product) {
      res.render("products/detalleDeProducto", { product: product });
    });
  },
  crearProducto: (req, res) => {
    res.render("products/creacionProducto");
  },
  store: (req, res) => {
    console.log(req.body, req.file);
    db.Products.create({
      name: req.body.name,
      description: req.body.description,
      image: req.file.filename,
      category: req.body.category,
      price: Number(req.body.price),
      idType: req.body.type,
      idDiscount: req.body.discount,
      idFragance: req.body.fragance,
      idSize: req.body.size,
    });
    res.redirect("/");
  },
  editarProducto: (req, res) => {
    db.Products.findByPk(req.params.id, {
      raw: true,
      include: [
        { association: "productFragance" },
        { association: "productSize" },
        { association: "productType" },
        { association: "productDiscount" },
      ],
    }).then(function (product) {
      console.log(product);
      res.render("products/edicionProducto", { product: product });
    });
  },
  modificarProducto: (req, res) => {
    console.log(req.body);
    db.Products.update(
      {
        name: req.body.name,
        description: req.body.description,
        image: req.file.filename,
        category: req.body.category,
        price: Number(req.body.price),
        idType: req.body.type,
        idDiscount: req.body.discount,
        idFragance: req.body.fragance,
        idSize: req.body.size,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.redirect("/products");
  },
  eliminarProducto: (req, res) => {
    db.Products.findByPk(req.params.id).then(function (product) {
      res.render("products/edicionProducto", { product: product });
    });
  },
  destruirProducto: (req, res) => {
    db.Products.destroy({
      where: { id: req.params.id },
    });
    res.redirect("/products");
  },
  busquedaProducto: async (req, res) => {
    let data = req.body.busqueda;

    const products = await db.Products.findAll({
      where: {
        name: { [Op.like]: `%${data}%` },
      },
    });
    const dataArray = products.map((item) => item.dataValues);
    return res.render("products/busquedaDeProducto", { dataArray });
  },
};

module.exports = productsControllers;
