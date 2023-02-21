import Footer from "../footer";

type PageProps = {
	children: React.ReactNode;
};

export default function Page({ children }: PageProps) {
	return (
		<main>
			{children}
			<Footer />
		</main>
	);
}
