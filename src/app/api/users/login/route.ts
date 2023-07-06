import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';

import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect();

export async function POST(req: NextRequest) {
	try {
		const bodyContents = await req.json();
		const { email, password } = bodyContents;

		// Check if user exists or not
		const user = await User.findOne({ email });
		if (!user) {
			return NextResponse.json(
				{ error: 'User does not exist' },
				{ status: 400 }
			);
		}

		// Check if password is correct
		const validPass = await bcryptjs.compare(
			password,
			user.password
		);
		if (!validPass) {
			return NextResponse.json(
				{ error: 'Invalid password' },
				{ status: 400 }
			);
		}

		// Create a token
		const tokenData = {
			id: user._id,
			username: user.username,
			email: user.email,
		};
		const token = await jwt.sign(
			tokenData,
			process.env.TOKEN_SECRET!,
			{
				expiresIn: '1h',
			}
		);
		const res = NextResponse.json({
			message: 'Login Success',
			success: true,
		});
		res.cookies.set('token', token, {
			httpOnly: true,
		});
		return res;
	} catch (error: any) {
		return NextResponse.json(
			{
				error: error.message,
			},
			{ status: 500 }
		);
	}
}
