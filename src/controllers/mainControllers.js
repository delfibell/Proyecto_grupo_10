const path = require("path");
let db = require("../database/models");

let mainControllers = {
  index: (req, res) => {
    db.Products.findAll({
      raw: true,
      include: [
        { association: "productFragance" },
        { association: "productSize" },
        { association: "productType" },
        { association: "productDiscount" },
      ],
    }).then(function (products) {
      res.render("index", { products });
    });
  },
  about: (req, res) => {
    res.render("about");
  },
  contact: (req, res) => {
    res.render("contact");
  },
};

module.exports = mainControllers;
