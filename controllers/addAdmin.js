const bcrypt = require("bcryptjs")
const insert=require("../modules/insert")

module.exports = async ( req, res ) => {
	const { user, pass } = req.body
	const username = user.trim()
	const psswd = pass.trim()
	if(username === '' && psswd === ''){
		res.redirect("/dashboard")
	}else{
		const password = await bcrypt.hashSync(psswd, 10)
		insert("users",{ user: username, pass: password},(err , result)=>{
			res.redirect("/dashboard")
		})
	}
}