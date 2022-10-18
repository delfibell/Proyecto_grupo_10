const path = require("path");

let mainControllers = {
  index: (req, res) => {
    res.render("index");
  },
};

module.exports = mainControllers;
