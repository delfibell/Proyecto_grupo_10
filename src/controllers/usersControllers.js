const path = require("path");

let usersControllers = {
  registro: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/users/formularioDeRegistro.html"));
  },

  login: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/users/formularioDeLogin.html"));
  },
};

module.exports = usersControllers;