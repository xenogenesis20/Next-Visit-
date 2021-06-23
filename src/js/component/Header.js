import React from "react";
import { Parallax } from "react-scroll-parallax";
import headerbg from "../../img/desk.png";

export const Header = () => {
	return (
		<>
			<Parallax
				styleInner={{
					display: "flex",
					alignItems: "center",
					fontSize: "30px",
					flexDirection: "column",
					color: "white"
				}}
				y={[-20, 30]}>
				<h1>Welcome to Next Visit</h1>
				<div className="w-75 m-3">
					<h3>
						<a href="#about-us" aria-hidden="true" className="anchor" />
						about us text example Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type specimen book.
					</h3>
				</div>
				<div className="w-75 mt-5 d-flex justify-content-center">
					<h4>Scroll down to learn more!</h4>
				</div>
			</Parallax>
		</>
	);
};
