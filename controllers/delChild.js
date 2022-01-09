const client = require("../modules/db")
module.exports = ( req, res ) => {
	const { id, card } = req.query
	if( id && card ){
		client( async ( err, db ) => {
			if(err){
				console.log(err)
			}else{
				const coll = db.collection("card")
				const find = await coll.findOne({_id: +card})
				if(find){
					coll.deleteOne({_id: find._id})
					res.redirect("/dashboard")
				}else{
					res.redirect("/dashboard")
				}
			}
		})
		.catch(err => console.log(err))
	}else{
		res.redirect("/dashboard")
	}
}