
import { signup } from "@src/controllers/user"
import { dataValidator } from "@src/middlewares"
import { TSignUp } from "@src/types"
import { signupSchema } from "@src/validator"
import express from "express"

const router = express.Router()

router.post("/signup", dataValidator(signupSchema), signup)

export default router