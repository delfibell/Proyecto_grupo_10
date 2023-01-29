const path = require('path');
const { check } = require('express-validator');

let validateCreateProduct = [
  check('name').notEmpty().withMessage('Debe ingresar un nombre').bail(),
  check('name').isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'),
  check('description').notEmpty().withMessage('Debe ingresar una descripción').bail(),
  check('description').isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres'),
  check('price').notEmpty().withMessage('Debe ingresar un precio').bail(),
  check('price').isNumeric().withMessage('El valor debe ser numérico').bail(),
  check('image').custom((value, { req }) => {
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
];

module.exports = validateCreateProduct