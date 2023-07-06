'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { InputField } from '@/components';

export default function LoginPage() {
	const router = useRouter();
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const [buttonDisabled, setButtonDisabled] = useState(true);
	const [loading, setLoading] = useState(false);

	const onLogin = async () => {
		try {
			setLoading(true);
			const response = await axios.post(
				'/api/users/login',
				user
			);
			toast.success('Login success');
			router.push('/');
		} catch (error: any) {
			console.log('Login Failed', error.response.data.error);
			toast.error(error.response.data.error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (user.email.length > 0 && user.password.length > 0) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [user]);
	return (
		<div className="max-w-sm min-h-screen w-full mx-auto">
			<h1 className="text-4xl font-bold py-8">Login</h1>

			<InputField
				id="email"
				label="Email"
				type="email"
				value={user.email}
				onChange={(e) =>
					setUser({ ...user, email: e.target.value })
				}
				placeholder="Enter your email"
			/>

			<InputField
				id="password"
				label="Password"
				type="password"
				value={user.password}
				onChange={(e) =>
					setUser({ ...user, password: e.target.value })
				}
				placeholder="Enter your password"
			/>

			<div className="flex items-center justify-between mb-4">
				<button
					onClick={onLogin}
					className="form__submit_button"
					disabled={buttonDisabled}
				>
					Login
				</button>
				{loading && <p>Processing...</p>}
			</div>

			<p className="text-sm mt-4">
				Don't have an account?{' '}
				<Link
					href="/signup"
					className="underline text-blue-500 hover:text-blue-600"
				>
					Sign Up
				</Link>
				{''} now.
			</p>
		</div>
	);
}
