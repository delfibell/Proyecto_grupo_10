const bcryptjs = require("bcryptjs")
const { validationResult } = require("express-validator");
let db = require("../database/models");

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
    
	db.Users.findByPk(req.body.email)
		.then(function(user) { 
	if(user) {
		return res.render('users/formularioDeRegistro', {
			errorInEmail:  
			{
					msg: 'Este email ya está registrado'
			}
				//oldData: req.body --> ver cómo hacemos que esto funcione y recuerde los datos que ingresamos
			})
	}
		})

//asi teniamos antes
//    let userInDB = User.findByField('email', req.body.email);
//		if (userInDB) {
//			return res.render('users/formularioDeRegistro', {
//				errorInEmail:  
//				{
//						msg: 'Este email ya está registrado'
//				}
//					//oldData: req.body --> ver cómo hacemos que esto funcione y recuerde los datos que ingresamos
//				})
//			}
		
    db.Users.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: bcryptjs.hashSync(req.body.password, 10),
		username: req.body.username,
		profilePic: req.file.name,
        idCategory: "", //siempre asignar categoria de user comun
	}) 
	
//	userToCreate = {
//			...req.body,
//			password: bcryptjs.hashSync(req.body.password, 10),
//			profilePic: req.file.filename
//		}
//		User.create(userToCreate);

		return res.redirect('/users/login');
  },


  login: (req, res) => {
    res.render("users/formularioDeLogin");
  },

  procesoLogin: (req, res) => {
	db.Users.findByPk(req.body.email)
		.then(function(user) { 
			if(user) {
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

		})
		
		
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