import { z } from "zod";

export const signupSchema = z.object({
	id: z.string().optional(),
	username: z.string(),
	email: z.string().email(),
	password: z.string().min(6),
	follower_count: z.number().optional(),
	following_count: z.number().optional(),
	salt: z.string().optional(),
	token: z.string().optional(),
	created_at: z.date().optional(),
})