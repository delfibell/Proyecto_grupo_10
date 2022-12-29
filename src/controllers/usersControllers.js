const path = require("path");
const fs = require('fs')
const usersFilePath = path.join(__dirname,'../data/Users.json')
const users = JSON.parse(fs.readFileSync(usersFilePath, "UTF-8"))
const bcrypt = require("bcryptjs")

const User = require('../models/User');
const { validationResult } = require("express-validator");

const usersControllers = {
  registro: (req, res) => {
    res.render("users/formularioDeRegistro");
  },

  procesoRegistro: (req,res) => {
    const resultValidation = validationResult(req)
    if (resultValidation.errors.length > 0) {
			return res.render('users/formularioDeRegistro', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

    let userInDB = User.findByField('email', req.body.email);

		if (userInDB) {
			return res.render('users/formularioDeRegistro', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}

    let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 10),
			avatar: req.file.filename
		}

		User.create(userToCreate);

		return res.redirect('/users/login');
  },

  store: (req,res) => {
    let errors = validationResult (req)
    if (errors.isEmpty()) {
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
    } else {
      res.render("users/formularioDeRegistro", { 
        errors: errors.array()
      })
    }
  },

  login: (req, res) => {
    res.render("users/formularioDeLogin");
  },
};

module.exports = usersControllers;