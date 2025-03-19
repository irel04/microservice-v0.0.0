import jwt, { JsonWebTokenError, JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRES_IN = "3h";

if (!JWT_SECRET) {
	throw new Error("JWT_SECRET is not defined in environment variables.");
}

const generateToken = (payload: Record<string, any>): string => {
	return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

export const decodeToken = (token: string): JwtPayload | null => {
	try {
		return jwt.verify(token, JWT_SECRET) as JwtPayload;
	} catch (error) {

		console.error("Invalid token:", (error as JsonWebTokenError).message);
		return null;
	}
};

export default generateToken;
