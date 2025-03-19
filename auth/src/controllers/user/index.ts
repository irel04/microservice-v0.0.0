import { registerUser } from "@src/services/user";
import { TSignUp } from "@src/types";
import { Request, Response } from "express";



export const signup = (req: Request, res: Response) => {
	const { email, password, username } = req.body as TSignUp;

	registerUser({ email, password, username }).then(data => {
		res.status(201).json({
			message: "User registered successfully",
			data
		})

	}).catch((error) => {	
		res.status(500).json({
			message: "Internal server error",
			error
		})
	})
	

	
}