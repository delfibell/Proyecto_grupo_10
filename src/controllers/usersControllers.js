const bcryptjs = require("bcryptjs")
const User = require('../models/User');
const { validationResult } = require("express-validator");

const usersControllers = {
  registro: (req, res) => {
    res.render("users/formularioDeRegistro");
  },

  procesoRegistro: (req,res) => {
	let errors = validationResult (req)
    if (errors.errors.length > 0) {
			return res.render('users/formularioDeRegistro', {
				errors: errors.array(),
				oldData: req.body
			});
		}

    let userInDB = User.findByField('email', req.body.email);
		if (userInDB) {
			return res.render('users/formularioDeRegistro', {
				errorInEmail:  
				{
						msg: 'Este email ya está registrado'
				}
					//oldData: req.body --> ver cómo hacemos que esto funcione y recuerde los datos que ingresamos
				})
			}
		
    let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 10),
			profilePic: req.file.filename
		}

		User.create(userToCreate);

		return res.redirect('/users/login');
  },

 // versión previa - ya no es necesaria porque tenemos el modelo User para crear y guardar la información del usuario
  // store: (req,res) => {
  //   let errors = validationResult (req)
  //   if (errors.isEmpty()) {
  //     let newUser = {
  //       id: Date.now(), 
  //       firstName: req.body.firstName,
  //       lastName: req.body.lastName,
  //       email: req.body.email,
  //       password: bcrypt.hashSync(req.body.password, 10),
  //       username: req.body.username,
  //       profilePic: req.file.filename,
  //       category: "Customer"
  //     }
  //     users.push(newUser)
  //     fs.writeFileSync(usersFilePath,JSON.stringify(users, null, ""))
  //     res.redirect("/users")
  //   } else {
  //     res.render("users/formularioDeRegistro", { 
  //       errors: errors.array()
  //     })
  //   }
  // },

  login: (req, res) => {
    res.render("users/formularioDeLogin");
  },

  procesoLogin: (req, res) => {
		let userToLogin = User.findByField('email', req.body.email);
		
		if(userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);

			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				if(req.body.recordar) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}

				return res.redirect('/users/mi-garage');
			} else {
				return res.render('users/formularioDeLogin', {
					errors: {
						email: {
							msg: 'Las credenciales son inválidas'
						}
					}
				});
			}
			
		} else {
			return res.render('users/formularioDeLogin', {
				errors: {
					email: {
						msg: 'No se encuentra este email en nuestra base de datos'
					}
				}
			});
		}
	},

 
  profile: (req, res) => {
		return res.render('users/perfilUsuario', {
		user: req.session.userLogged
		});
	},

  logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
};

module.exports = usersControllers;