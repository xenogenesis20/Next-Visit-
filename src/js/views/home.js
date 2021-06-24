import React from "react";
import "../../styles/home.scss";
import { Header } from "../component/Header";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { SectionContent } from "../component/SectionContent";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";

export const Home = () => {
	return (
		<>
			<Navbar />
			<header className="wrapper">
				<Header />
			</header>
			<section>
				<SectionContent />
			</section>
			<Footer />
		</>
	);
};
