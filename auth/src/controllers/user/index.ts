import { TSignUp } from "@src/types";
import { Request, Response } from "express";



export const signup = (req: Request, res: Response) => {
	const { email, password, username } = req.body as TSignUp;


	res.send({
		message: "User signed up successfully"})

	
}