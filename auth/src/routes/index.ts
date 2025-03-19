import express, { Request, Response } from "express"
import userRoute from "@src/routes/user"

const router = express.Router()


router.use("/users", userRoute)


export default router 	