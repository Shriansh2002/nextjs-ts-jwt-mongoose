import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';

import bcryptjs from 'bcryptjs';

connect();

export async function POST(req: NextRequest) {
	try {
		const bodyContents = await req.json();
		const { username, email, password } = bodyContents;

		console.log(bodyContents);

		// Check if user already exists
		const userExist = await User.findOne({ email });
		if (userExist) {
			return NextResponse.json(
				{ error: 'User already exists' },
				{ status: 400 }
			);
		}

		// Encrypting password
		const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, salt);

		// Create new user
		const newUser = new User({
			username,
			email,
			password: hashedPassword,
		});
		const savedUser = await newUser.save();

		return NextResponse.json({
			message: 'User Created Success',
			success: true,
			savedUser,
		});
	} catch (error: any) {
		return NextResponse.json(
			{
				error: error.message,
			},
			{ status: 500 }
		);
	}
}
