const route = require("express").Router()
const upload = require("../modules/multer")
const session = require("../modules/session")
const Auth = require("../modules/Auth")
const controllers = require("../controllers")

route.use(session)

route.get(["/", "/home"], controllers.main)
route.get("/courses", controllers.courses)
route.get("/shortcuts", controllers.shortcuts)
route.get("/apps", controllers.apps)
route.get("/admin", controllers.login)
route.get("/dashboard", Auth, controllers.dashboard)
route.get("/dashboard/delCourse", Auth, controllers.delcourse)
route.get("/dashboard/delProject", Auth, controllers.delPro)
route.get("/dashboard/delFuture", Auth, controllers.delFut)
route.get("/dashboard/delAdmin", Auth, controllers.delAdmin)
route.get("/dashboard/logOut", Auth, controllers.logout)
route.get("/dashboard/delcourse/child", Auth, controllers.child)


route.post("/admin", controllers.admin)
route.post("/dashboard/addNew", Auth, upload.single("newProject"), controllers.addPro)
route.post("/dashboard/addFut", Auth, upload.single("future"), controllers.addFut)
route.post("/dashboard/addCourses", Auth, upload.single("img"), controllers.addCourses)
route.post("/dashboard/addAdmin", Auth, controllers.addAdmin)


module.exports = route