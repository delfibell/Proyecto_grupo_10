function guestMiddleware(req, res, next) {
	if (req.session.userLogged) {
		return res.redirect('/users/mi-garage');
	}
	next();
}

module.exports = guestMiddleware;