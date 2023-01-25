function adminLoggedMiddleware(req, res, next) {
  if (req.session.userLogged) {
    res.locals.adminLogin = false; //esto es para setar por defecto false si sos guest o user comun
    let userInLogin = req.session.userLogged;
    if (userInLogin.idCategory == 1) {
      res.locals.adminLogin = true;
    }
  }
  next();
}

module.exports = adminLoggedMiddleware;
