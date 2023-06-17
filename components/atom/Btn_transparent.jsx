export default function Btn_transparent({ children, fn }) {
	return (
		<section className="bg-transparent w-36 text-center py-3 border-2 border-gold cursor-pointer duration-300 transition-all hover:bg-gold group">
			<p className="text-white capitalize group-hover:text-dark-accent transition-all duration-300">
				{children}
			</p>
		</section>
	);
}
