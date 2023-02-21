import Footer from "../footer";
import Navbar from "../navbar";

type PageProps = {
	children: React.ReactNode;
};

export default function Page({ children }: PageProps) {
	return (
		<main>
			<Navbar />
			{children}
			<Footer />
		</main>
	);
}
