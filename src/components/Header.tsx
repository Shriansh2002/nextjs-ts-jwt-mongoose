'use client';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
	const router = useRouter();

	const logout = async () => {
		try {
			await axios.get('/api/users/logout');
			toast.success('Logout successful');
			router.push('/login');
		} catch (error: any) {
			console.log(error.message);
			toast.error(error.message);
		}
	};
	return (
		<header className="bg-gray-800 py-4">
			<div className="container mx-auto flex items-center justify-between">
				<h1 className="text-white text-2xl font-bold">
					Dashboard
				</h1>
				<div className="flex gap-2">
					<Link
						href="/profile"
						className="underline text-blue-500 hover:text-blue-600"
					>
						<button className="profile__button">
							Profile
						</button>
					</Link>
					<button
						className="logout__button"
						onClick={logout}
					>
						Logout
					</button>
				</div>
			</div>
		</header>
	);
}
