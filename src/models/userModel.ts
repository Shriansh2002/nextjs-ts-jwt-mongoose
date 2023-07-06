import mongoose, { Document, Model, Schema } from 'mongoose';

interface IUser extends Document {
	username: string;
	email: string;
	password: string;
	isVerified: boolean;
	isAdmin: boolean;
	fogotPasswordToken?: string;
	forgotPasswordTokenExpiry?: Date;
	verifyToken?: string;
	verifyTokenExpiry?: Date;
}

const userSchema: Schema<IUser> = new mongoose.Schema<IUser>({
	username: {
		type: String,
		required: [true, 'Username is required'],
		unique: true,
	},
	email: {
		type: String,
		required: [true, 'Email is required'],
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'Password is required'],
	},
	isVerified: {
		type: Boolean,
		default: false,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
	fogotPasswordToken: String,
	forgotPasswordTokenExpiry: Date,
	verifyToken: String,
	verifyTokenExpiry: Date,
});

const User: Model<IUser> =
	mongoose.models.users ||
	mongoose.model<IUser>('users', userSchema);

export default User;
