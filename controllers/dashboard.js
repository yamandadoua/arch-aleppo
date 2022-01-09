const find = require("../modules/find")
module.exports = ( req, res ) => {
	find("newProject", (err, result)=>{
		if(err){
			res.redirect("/dashboard")
		}else{
			find("future", (err, future) => {
				if(err){
					res.redirect("/dashboard")
				}else{
					find("courses", (err, courses) => {
						if(err){
							res.redirect("/dashboard")
						}else{
							find("users", (err, users)=> {
								if(err){
									res.redirect("/dashboard")
								}else{
									find("card", (err, cards)=> {
										courses.forEach(course => {
											course.cards = []
											cards.forEach(card => {
												if(card.type == course.option){
													course.cards.push(card)
												}
											})
										})
										res.render("adminPanel", {
											newProject: result,
											future,
											courses,
											users
										})

									})
								}
							})
						}
					})		
				
				}
			})
		}
	})
}