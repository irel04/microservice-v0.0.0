import { NextFunction, Request, Response } from "express";
import { z } from "zod";

// This validates whether the request body contains all the required fields
export const dataValidator = (schema: z.ZodObject<any>) => {
	return (req: Request, res: Response, next: NextFunction) => {
		const bodyData = req.body;

		try {
			schema.parse(bodyData)
			next()
		} catch (error) {
			res.status(411).json({
				message: "Invalid data",
				error: (error as z.ZodError).errors
			})
		}
	}
}