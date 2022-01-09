const insert = require("../modules/insert")
const client = require('../modules/db')
module.exports = ( req, res) => {
	const { name, link, option, body} = req.body
	if(req.file ){
		const img = req.file
		const type = option.toLowerCase().trim()
		client( async (err, db)=> {
			if(err){
				return err
			}else{
				const courses = db.collection("courses")
				const card = db.collection("card")
				const find = await courses.findOne({option: type})
				if(find){
					const id = Math.floor(new Date()/200)
					const update = await courses.updateOne({_id:find._id},{
						$push:{
							data:{
								cardId: id
							}
						}
					})
					const updataCard = await card.insertOne({
						_id: id,
						type: insert.name,
						name,
						link,
						type,
						body,
						image: img
					})
					return res.redirect("/dashboard")
				}else{
					const cardId = Math.floor(new Date()/200)
					const insert = await courses.insertOne({
						_id: Math.floor(new Date()/100),
						option: type,
						data: [{
							cardId
						}]
					})
					const insertCard = await card.insertOne({
						_id: cardId,
						type: insert.name,
						name,
						link,
						type,
						body,
						image: img
					})
					return res.redirect("/dashboard")
				}
					
			}
		})
	}else{
		res.redirect("/dashboard")
	}
} 