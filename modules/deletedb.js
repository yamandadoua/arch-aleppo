const client = require("./db")
module.exports = ( name, id, callback) => {
	client((err, db) => {
		if(err) {
			return callback(new Error("Error mongodb"))
		}else{
			if(name && data){
				db.collection(name).deleteOne({"_id":id}, (err, result) => {
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