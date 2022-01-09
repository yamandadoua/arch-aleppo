const find = require("../modules/find")
module.exports = ( req, res ) => {
	find("newProject", (err, result)=>{
		if(err){
			res.redirect("/")
		}else{
			find("future", (err, future) => {
				if(err){
					res.redirect("/")
				}else{
					res.render("main", {
						newProject: result,
						future
					})
				}
			})
		}
	})
	
}