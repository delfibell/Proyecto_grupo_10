const path = require("path");
let db = require("../database/models");

let mainControllers = {
  index: (req, res) => {
    db.Products.findAll().then(function (products) {
      res.render("index", { products });
    });
  },
  about: (req, res) => {
    res.render("about");
  },
};

module.exports = mainControllers;
