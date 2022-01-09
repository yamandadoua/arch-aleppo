const client = require("./db")
module.exports = ( name, data, callback) => {
	client((err, db) => {
		if(err) {
			return callback(new Error("Error mongodb"))
		}else{
			if(name && data){
				db.collection(name).insertOne({_id: Math.floor(new Date()/100), ...data}, (err, result) => {
					if(err){
						callback(err)
					}else{
						callback(null, result)
					}
				})
			}else{
				return callback(new Error("Error argument.."))
			}
		}
	})
}