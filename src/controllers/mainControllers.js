const path = require("path");

let mainControllers = {
  index: (req, res) => {
    res.render("index");
  },
  about:(req, res) => {
    res.render("about");
  }
};

module.exports = mainControllers;
