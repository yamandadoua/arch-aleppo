const client = require("../modules/db")
module.exports = ( req, res) => {
	const { id } = req.query
	client((err, db)=> {
		if(err){
			res.redirect("/dashboard")
		}else{
			db.collection("future").deleteOne({"_id": +id}, (err, result ) =>{
				return res.redirect("/dashboard")
			})
		}
	})
} 