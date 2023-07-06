export default function WidgetContainer() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{Array.from({ length: 3 }).map((_, i) => (
				<div className="border bg-white rounded-lg shadow-md p-4">
					<h3 className="text-lg font-semibold">
						Widget {i + 1}
					</h3>
					<p>This is the content of Widget {i + 1}.</p>
				</div>
			))}
		</div>
	);
}
