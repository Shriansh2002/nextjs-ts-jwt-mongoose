'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export default function ProfilePage() {
	const [data, setData] = useState('nothing');

	useEffect(() => {
		const getUserDetails = async () => {
			try {
				const res = await axios.get('/api/users/me');
				setData(res.data.data._id);
			} catch (error: any) {
				console.log(error.message);
				toast.error(error.message);
			}
		};

		getUserDetails();
	}, []);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-8">
			<div className="bg-white rounded-lg shadow-md p-6 w-96">
				<div className="flex items-center">
					<img
						src="https://avatars.githubusercontent.com/u/47280571?v=4"
						alt="Profile Picture"
						className="w-16 h-16 rounded-full mr-4"
					/>
					<div>
						<h1 className="text-2xl font-bold">User</h1>
					</div>
				</div>
				<hr className="my-4" />
				<h2 className="text-xl font-semibold">
					{data === 'nothing' ? 'Loading...' : data}
				</h2>
			</div>
		</div>
	);
}
