const session = require("express-session")
const MongoDBStore = require("connect-mongodb-session")(session)
const env = require('dotenv').config()

const host = process.env.dbHost
const port = process.env.dbPort
const name = process.env.dbName


const store = new MongoDBStore({
	uri: `mongodb+srv://yaman:123@cluster0.uowdi.mongodb.net/eng?retryWrites=true&w=majority`,
	collection: 'sessions'
});

module.exports = session({
	secret:"eng-project",
	cookie:{ maxAge: 30000 * 40},
	saveUninitialized: true,
	resave: false,
	store
})