import React from "react";
import { Parallax } from "react-scroll-parallax";

export const SectionContent = () => {
	return (
		<>
			<Parallax
			// styleInner={{
			// 	display: "flex",
			// 	alignItems: "center",
			// 	fontSize: "30px",
			// 	flexDirection: "column",
			// 	color: "white"
			// }}
			>
				<section className="about">
					<div className="about-title">
						<h2>Trying to keep track of your symptoms and medications can be challenging. </h2>
					</div>
					<div className="about-pages">
						<div>
							<h2>Track your symptoms</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia deserunt
								quod eligendi exercitationem dignissimos! Numquam nulla asperiores modi, unde,
								voluptatum nam inventore at facilis deleniti provident incidunt nostrum et debitis
								veniam quas? Nobis architecto quos minus ad, deserunt ab odio cum, iusto id at
								recusandae pariatur animi aut commodi!
							</p>
						</div>
						<div>
							<h2>Keep a log of all your medications</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia deserunt
								quod eligendi exercitationem dignissimos! Numquam nulla asperiores modi, unde,
								voluptatum nam inventore at facilis deleniti provident incidunt nostrum et debitis
								veniam quas? Nobis architecto quos minus ad, deserunt ab odio cum, iusto id at
								recusandae pariatur animi aut commodi!
							</p>
						</div>
						<div>
							<h2>View all of your information from the dashboard</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia deserunt
								quod eligendi exercitationem dignissimos! Numquam nulla asperiores modi, unde,
								voluptatum nam inventore at facilis deleniti provident incidunt nostrum et debitis
								veniam quas? Nobis architecto quos minus ad, deserunt ab odio cum, iusto id at
								recusandae pariatur animi aut commodi!
							</p>
						</div>
					</div>
				</section>
			</Parallax>
		</>
	);
};
