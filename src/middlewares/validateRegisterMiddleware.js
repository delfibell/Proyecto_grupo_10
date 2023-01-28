const path = require('path');
const { check } = require('express-validator');

const validateCreateForm = [
	check('firstName')
		.notEmpty()
		.isLength({min:2})
		.withMessage("El nombre debe tener más de 2 caracteres"),
	check('lastName')
		.notEmpty()
		.isLength({min:2})
		.withMessage("El apellido debe tener más de 2 caracteres"),
	check('email')
		.notEmpty().bail()
		.isEmail()
		.withMessage("Debes ingresar un email válido"),
	check('password')
		.notEmpty().bail()
		.isLength({min:8})
		.withMessage("La contraseña debe tener más de 8 caracteres"),
	check('username')
		.notEmpty()
		.isLength({min:2})
		.withMessage("El nombre de usuario debe tener más de 2 caracteres"),
	check('profilePic').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];

		if (!file) {
			throw new Error('Debes subir una imagen');
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