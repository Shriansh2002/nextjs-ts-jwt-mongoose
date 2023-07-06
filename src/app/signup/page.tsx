'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { InputField } from '@/components';

export default function SignupPage() {
	const router = useRouter();
	const [user, setUser] = useState({
		email: '',
		password: '',
		username: '',
	});
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const [loading, setLoading] = useState(false);

	const onSignup = async () => {
		try {
			setLoading(true);
			const response = await axios.post(
				'/api/users/signup',
				user
			);
			console.log('Signup success');
			router.push('/login');
		} catch (error: any) {
			console.log('Signup failed', error.response.data.error);
			toast.error(error.response.data.error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (
			user.email.length > 0 &&
			user.password.length > 0 &&
			user.username.length > 0
		) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [user]);

	return (
		<div className="max-w-sm min-h-screen w-full mx-auto">
			<h1 className="text-4xl font-bold py-8">Signup</h1>

			<InputField
				id="username"
				label="Username"
				type="text"
				value={user.username}
				onChange={(e) =>
					setUser({ ...user, username: e.target.value })
				}
				placeholder="Username"
			/>

			<InputField
				id="email"
				label="Email"
				type="email"
				value={user.email}
				onChange={(e) =>
					setUser({ ...user, email: e.target.value })
				}
				placeholder="Email"
			/>

			<InputField
				id="password"
				label="Password"
				type="password"
				value={user.password}
				onChange={(e) =>
					setUser({ ...user, password: e.target.value })
				}
				placeholder="Password"
			/>

			<div className="flex items-center justify-between mb-4">
				<button
					onClick={onSignup}
					className="form__submit_button"
					disabled={buttonDisabled}
				>
					Signup
				</button>

				{loading && <p>Processing...</p>}
			</div>

			<p className="text-sm mt-4">
				Already have an account?{' '}
				<Link
					href="/login"
					className="underline text-blue-500 hover:text-blue-600"
				>
					Sign In
				</Link>{' '}
				here.
			</p>
		</div>
	);
}
