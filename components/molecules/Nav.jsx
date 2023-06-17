import Social_Icons from "../atom/Social_Icons";

export default function Nav() {
	return (
		<section className="flex items-center justify-between">
			<div className="bg-white p-2 w-max cursor-pointer lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="#292e36"
					viewBox="0 0 24 24"
				>
					<path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
				</svg>
			</div>
			
			<Social_Icons />
		</section>
	);
}
