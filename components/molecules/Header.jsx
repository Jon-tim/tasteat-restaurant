import Btn_gold from "@/components/atom/Btn_gold";
import Btn_transparent from "@/components/atom/Btn_transparent";
import Logo from "@/components/atom/Logo";

export default function Header() {
	return (
		<section className="bg-dark-accent py-8 px-4">
			<section className="flex items-center justify-between mx-auto max-w-[1200px] flex-col gap-8">
				<div className="">
					<Logo />
				</div>
				<div className="flex gap-4">
					<Btn_transparent>call +123-456-789</Btn_transparent>
					<Btn_gold>reservation</Btn_gold>
				</div>
			</section>
		</section>
	);
}
