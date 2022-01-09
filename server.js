const express = require("express")
const route = require("./router/route")
const path = require("path")
const bcrypt = require("bcryptjs")
const db = require("./modules/db")
const insert = require("./modules/insert")
const app = express()
const env = require('dotenv').config()

if(process.argv[2] === "create"){
	const { user, pass }= process.env
	if(user == '' && pass ==''){
		console.error("User and password is Empty!")
		process.exit(1)
	}
	console.log(`
	Wait create user: ${user} ..
	`)
	const password = bcrypt.hashSync(pass, 10)
	db( async (err, db)=> {
		if(err){
			console.log(err)
			process.exit(1)
		}else{
			const coll = db.collection("users")
			const users = await coll.findOne({user})
			if(users){
				console.log("User is found..")
				process.exit(1)
			}else{
				insert("users", {user, pass: password}, (err, result)=>{
					if(err) console.log(err)
					console.log("Done.")
					process.exit(1)
				})
			}
		}
	})
	
}else{


	const PORT = process.env.PORT || 3000

	app.set("view engine", "ejs")

	app.use(express.json())
	app.use(express.urlencoded({ extended: false }))
	app.use(express.static(path.join( __dirname, "public/css" )))
	app.use(express.static(path.join( __dirname, "public/js" )))
	app.use(express.static(path.join( __dirname, "public/asset" )))
	app.use(express.static(path.join( __dirname, "image" )))
	app.use(express.static(path.join( __dirname, "uploads" )))

	app.use(route)
	app.use("*", (req, res) => {
		res.redirect("/")
	})
	app.listen(PORT, ()=>{
		console.log(`Running of port ${PORT}`)
	})
}