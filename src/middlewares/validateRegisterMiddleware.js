const { body } = require('express-validator')

const validateCreateForm = [
    body("firstName").notEmpty().withMessage("Debes completar el campo nombre"),
    body("lastName").notEmpty().withMessage("Debes completar el campo apellido"),
    body("email").isEmail().withMessage("Debes completar un email válido"),
    body("password").notEmpty().withMessage("Debes completar el campo contraseña"),
    body("username").notEmpty().withMessage("Debes completar el campo nombre de usuario")
  ]

module.exports = validateCreateForm