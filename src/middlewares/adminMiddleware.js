function adminMiddleware(req, res, next) {
	let userInLogin = req.session.userLogged;
    if (userInLogin.idCategory == 2) {
      alert("Debes tener permiso para acceder");
      return res.redirect('/')
    }
	next();
}

module.exports = adminMiddleware;