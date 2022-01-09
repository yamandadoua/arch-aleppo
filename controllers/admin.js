module.exports = ( req, res ) => {
	if(req.session.Auth){
		res.redirect("/dashboard")
	}else{
		res.render("login")
	}
}