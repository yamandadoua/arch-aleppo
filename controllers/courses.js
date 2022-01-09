const find = require("../modules/find")
module.exports = ( req, res ) => {
	find("courses", (err, result)=>{
		if(err){
			res.redirect("/courses")
			console.log(err)
		}else{
			find("courses", (err, courses) => {
				if(err){
					res.redirect("/")
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
						console.log(courses)
						res.render("courses", {courses})
					})
				}
			})

		}
	})
}
