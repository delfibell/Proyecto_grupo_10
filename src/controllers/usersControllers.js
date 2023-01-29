const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
let db = require("../database/models");

const usersControllers = {
  registro: (req, res) => {
    res.render("users/formularioDeRegistro");
  },

  procesoRegistro: (req, res) => {
    let errors = validationResult(req);
    if (errors.errors.length > 0) {
      return res.render("users/formularioDeRegistro", {
        errors: errors.array(),
        oldData: req.body,
      });
    }

    db.Users.findByPk(req.body.email).then(function (user) {
      if (user) {
        return res.render("users/formularioDeRegistro", {
          errorInEmail: {
            msg: "Este email ya está registrado",
          },
          oldData: req.body 
        });
      }
    });
    console.log(req.body);
    const isAdmin = req.body.email.endsWith("@oft.com");
    const admin = isAdmin ? "1" : "2";
    db.Users.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 10),
      username: req.body.username,
      profilePic: req.file.filename,
      idCategory: admin, //siempre asignar categoria de user comun
    });

    return res.redirect("/users/login");
  },

  login: (req, res) => {
    res.render("users/formularioDeLogin");
  },

  procesoLogin: (req, res) => {
    const userLogin = db.Users.findOne({
      where: {
        email: req.body.email,
      },
    }).then(function (user) {
      if (user) {
        let isOkThePassword = bcryptjs.compareSync(
          req.body.password,
          user.dataValues.password
        );

        if (isOkThePassword) {
          delete user.password;
          req.session.userLogged = user;

          if (req.body.recordar) {
            res.cookie("userEmail", req.body.email, {
              maxAge: 1000 * 60 * 60,
            });
          }

          return res.redirect("/users/mi-garage");
        } else {
          return res.render("users/formularioDeLogin", {
            errors: {
              email: {
                msg: "Las credenciales son inválidas",
              },
            },
          });
        }
      } else {
        return res.render("users/formularioDeLogin", {
          errors: {
            email: {
              msg: "No se encuentra este email en nuestra base de datos",
            },
          },
        });
      }
    });
  },

  userEdit: (req, res) => {
    res.render("users/edicionDeUsuario", {
      user: req.session.userLogged,
    });
  },

  editProcess: (req, res) => {
    console.log(res.locals);

    db.Users.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        profilePic: req.file.filename,
      },
      {
        where: { id: res.locals.userLogged.id },
      }
    );
    res.clearCookie("userEmail");
    req.session.destroy();
    res.redirect("../users/login");
  },

  profile: (req, res) => {
    return res.render("users/perfilUsuario", {
      user: req.session.userLogged,
    });
  },

  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },
};

module.exports = usersControllers;
