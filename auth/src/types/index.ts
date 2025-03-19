export type TSignUp = {
	id?: string;
	username: string; 
	email: string;
	password: string;
	follower_count?: number;
	following_count?: number;
	salt?: string;
	token?: string;
	created_at?: Date;

}