import { prisma } from "@src/config/database";
import { TSignUp } from "@src/types";
import generateToken from "@src/utils/generate-token";
import { hashPassword } from "@src/utils/hashing";


export const registerUser = async (payload: TSignUp) => {

	const { password: plainPassword } = payload
	

	const [saltRounds, password] = await hashPassword(plainPassword)

	const user = await prisma.users.findUnique({
		where: {
			username: payload.email
		}
	})

	if(user){
		throw new Error('User already exists')
	}

	const newUser = await prisma.users.create({
		data: {
			...payload,
			password,
			salt: saltRounds
		}
	})

	const token = generateToken({
		id: newUser.id,
		username: newUser.username
	})


	return {
		token
	}

	


}