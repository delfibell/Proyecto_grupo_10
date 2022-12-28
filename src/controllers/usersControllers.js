const path = require("path");
const fs = require('fs')
const usersFilePath = path.join(__dirname,'../data/Users.json')
const users = JSON.parse(fs.readFileSync(usersFilePath, "UTF-8"))
const bcrypt = require("bcryptjs")

let usersControllers = {
  registro: (req, res) => {
    res.render("users/formularioDeRegistro");
  },

  store: (req,res) => {
    let newUser = {
      id: Date.now(), 
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      username: req.body.username,
      profilePic: req.file.filename,
      category: "Customer"
    }
    users.push(newUser)
    fs.writeFileSync(usersFilePath,JSON.stringify(users, null, ""))
    res.redirect("/users")
  },

  login: (req, res) => {
    res.render("users/formularioDeLogin");
  },
};

module.exports = usersControllers;