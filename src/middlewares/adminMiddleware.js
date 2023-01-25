function adminMiddleware(req, res, next) {
  if (req.session.userLogged && req.session.category === 1) {
    return res.redirect("/users/mi-garage");
  }
  next();
}

module.exports = adminMiddleware;
