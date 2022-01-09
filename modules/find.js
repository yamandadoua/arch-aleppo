const client = require("./db")
module.exports = ( name, callback) => {
	client( async (err, db) => {
		if(err) {
			return callback(new Error("Error mongodb"))
		}else{
			if(name){
				const result = await db.collection(name).find({}).toArray()
				if(result){
					callback(null, result)
				}else{
					callback(new Error("Error find data"))
				}
			}else{
				return callback(new Error("Error argument.."))
			}
		}
	})
}