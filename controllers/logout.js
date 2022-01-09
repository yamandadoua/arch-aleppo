const session = require("express-session")
module.exports = ( req, res ) => {
	req.session.Auth = false
	req.session.destroy( err => {
		console.log(err)
	})
	return res.redirect("/admin")
}