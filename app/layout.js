import "./globals.css";
import { Josefin_Sans, Cormorant_Infant } from "next/font/google";
import Header from "@/components/molecules/Header";
import BookTable from "@/components/molecules/BookTable";
import Footer from "@/components/molecules/Footer";

const josephin = Josefin_Sans({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--jose",
});
const cormorant = Cormorant_Infant({
	subsets: ["latin"],
	weight: ["400", "700"],
	style: ["normal", "italic"],
	variable: "--cor",
});

export const metadata = {
	title: "Tasteat Restaurant",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={` ${josephin.variable} ${cormorant.variable}`}
		>
			<body>
				<Header />
				{children}
				<BookTable />
				<Footer />
			</body>
		</html>
	);
}
