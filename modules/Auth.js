module.exports = ( req, res, next) => {
	if(req.session.Auth){
		return next()
	}else{
		res.redirect("/admin")
	}
}