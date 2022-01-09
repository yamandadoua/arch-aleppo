const bcrypt = require("bcryptjs")
const client = require("../modules/db")

module.exports = async ( req, res ) => {
	const user= req.body.user.trim()
	const pass = req.body.pass.trim()
	if(user !== "" && pass !== ""){        
		client( async (err, db)=> {
			if(err){
				console.log(err)
			}else{
				const users = await db.collection('users').findOne({user})
				if(users){
					const password = await bcrypt.compareSync(pass, users.pass)
					if(password){
						req.session.Auth = true
						return res.redirect("/dashboard")
					}else{
						res.render("login", {msg: "Wrong password."})
					}
					
				}else{
					res.render("login", {msg: "Wrong user."})
				}
			}
		})
		.catch(err => console.log(err))
	}else{
		req.session.Auth = false
		res.render("login", {msg: "User and password is Empty."})
	}
}