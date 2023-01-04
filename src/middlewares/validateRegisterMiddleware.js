const path = require('path');
const { body } = require('express-validator');

const validateCreateForm = [
	body('firstName').notEmpty().withMessage('Tenés que escribir un nombre'),
	body('lastName').notEmpty().withMessage('Tenés que escribir un apellido'),
	body('email')
		.notEmpty().withMessage('Tenés que escribir un correo electrónico').bail()
		.isEmail().withMessage('Tenés que escribir un formato de correo válido'),
	body('password').notEmpty().withMessage('Tenés que escribir una contraseña'),
	body('username').notEmpty().withMessage('Tenés que escribir un nombre de usuario'),
	body('profilePic').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];

		if (!file) {
			throw new Error('Tenés que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]

module.exports = validateCreateForm