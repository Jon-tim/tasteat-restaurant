export default function Btn_gold({ children, fn }) {
	return (
		<section className="bg-gold w-36 text-center py-3 border-2 border-gold cursor-pointer duration-300 transition-all hover:bg-transparent group">
			<p className="text-dark-accent capitalize group-hover:text-gold transition-all duration-300">
				{children}
			</p>
		</section>
	);
}
