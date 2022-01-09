const insert = require("../modules/insert")
module.exports = ( req, res) => {
	if(req.file){
		const file = req.file
		insert("newProject", file, (err, result) => {
			if(err){
				res.redirect("/dashboard")
			}else{
				res.redirect('/dashboard')
			}
		} )
	}else{
		res.redirect("/dashboard")
	}
} 