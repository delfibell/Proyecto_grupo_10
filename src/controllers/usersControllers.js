const path = require("path");

let usersControllers = {
  registro: (req, res) => {
    res.render("users/formularioDeRegistro");
  },

  login: (req, res) => {
    res.render("users/formularioDeLogin");
  },
};

module.exports = usersControllers;