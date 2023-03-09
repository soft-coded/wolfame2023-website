import { motion } from "framer-motion";

import Footer from "../footer";
import Navbar from "../navbar";

type PageProps = {
	children: React.ReactNode;
};

export default function Page({ children }: PageProps) {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2, ease: "easeInOut" }}
			onAnimationComplete={() => {
				window.scrollTo(0, 0);
			}}
		>
			<Navbar />
			{children}
			<Footer />
		</motion.main>
	);
}
