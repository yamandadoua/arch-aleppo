const client = require("../modules/db")
module.exports = (req, res)=> {
	const {id}= req.query
	if(id){
		client( async (err, db) => {
			if(err){
				console.log(err)
			}else{
				const coll = db.collection("users")
				const users = await coll.find({}).toArray()
				if(users.length > 1){
					coll.deleteOne({_id: +id}, (err, result)=>{
						res.redirect("/dashboard")
					})
				}else{
					res.redirect("/dashboard")
				}
			}
		})
	}else{
		res.redirect("/dashboard")
	}
}