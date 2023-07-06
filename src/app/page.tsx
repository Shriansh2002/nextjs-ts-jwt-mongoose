import { Header, WidgetContainer, Footer } from '@/components';

export default function Home() {
	return (
		<div className="flex flex-col h-screen">
			<Header />

			<main className="container mx-auto py-8 flex-grow">
				<h2 className="text-2xl font-bold py-4 mb-4">
					Welcome to the Dashboard 🚀
				</h2>

				<WidgetContainer />
			</main>

			<Footer />
		</div>
	);
}
