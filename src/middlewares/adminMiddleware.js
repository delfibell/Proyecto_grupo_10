function adminMiddleware (req, res, next) {
	if (req.session.userLogged && req.session.category == "Admin") {
		return res.redirect('/users/mi-garage');
	}
	next();
}

module.exports = adminMiddleware;