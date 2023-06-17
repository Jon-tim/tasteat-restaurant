import { operations } from "@/data/operations";

export default function History() {
	return (
		<section className="bg-faded  px-4 py-8">
			<section className="flex flex-col gap-4">
				{operations.map((item, id) => (
					<div
						key={item.id}
						className="capitalize flex items-center flex-col "
					>
						<div className="bg-dark-accent w-max p-3 rounded-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="white"
							>
								{item.r && (
									<circle
										cx="12"
										cy="12"
										r="4"
									></circle>
								)}
								<path d={item.path}></path>
							</svg>
						</div>
						<h4 className="text-dark-accent text-lg">
							{item.title}
						</h4>
						<p className="text-sm text-text-color">
							{item.details}
						</p>
					</div>
				))}
			</section>
			<section>
				
			</section>
		</section>
	);
}
