import bcrypt from "bcrypt"
// This uses salt and hash mechanism 
export const hashPassword = async (plainPassword: string) => {
	const saltRounds = await bcrypt.genSalt(10);

	return [saltRounds, await bcrypt.hash(plainPassword, saltRounds)];
}

export const validatePassword = async (password: string, storedPassword: string) => {
	return await bcrypt.compare(password, storedPassword);
}