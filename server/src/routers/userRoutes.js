const express = require("express")
const userRoutes= express.Router()
const userControllers = require ("../controllers/services/userControllers")
const { protecttedRoutesUser } = require("../middlewares/userMiddlewares")
const { isUser } = require("../middlewares/checkUserOrAdmin")

userRoutes.get("/problem/solved/:userID",protecttedRoutesUser,isUser,userControllers.getUserSubmissions)
userRoutes.get("/problems/attempts/:problemId",protecttedRoutesUser,isUser,userControllers.getProblemAttempts)
userRoutes.get("/user/profile/delete",protecttedRoutesUser,isUser,userControllers.deleteProfile)



module.exports=userRoutes