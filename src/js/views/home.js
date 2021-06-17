import React from "react";
import "../../styles/home.scss";
import { Header } from "../component/Header";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { SectionContent } from "../component/SectionContent";

export const Home = () => {
	return (
		<>
			<header className="wrapper">
				<Header />
			</header>
			<section>
				<SectionContent />
			</section>
		</>
	);
};
