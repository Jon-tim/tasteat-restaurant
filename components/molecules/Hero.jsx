import Image from "next/image";
import Btn_transparent from "../atom/Btn_transparent";
export default function Hero() {
	return (
		<section className="bg-dark-accent flex flex-col px-4 pt-10">
			<div className="text-white text-center flex flex-col items-center gap-4">
				<h1 className="text-6xl">Welcome to Tasteat</h1>
				<p>
					The people, food and the prime locations make the perfect
					place good friends & family to come together and have great
					time.
				</p>

				<Btn_transparent>view menu</Btn_transparent>
			</div>
			<div className="w-full h-[500px] overflow-hidden relative">
				<Image
					src="/../public/image/hero.png"
					alt="image of the interior of a family cuizine"
					fill
					className="object-cover translate-y-16"
				/>
			</div>
		</section>
	);
}
