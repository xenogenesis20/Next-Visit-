import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import { SectionCard } from "./SectionCard";
import { SectionCardFeaturesOne } from "./SectionCardFeaturesOne";
import { SectionCardFeaturesTwo } from "./SectionCardFeaturesTwo";
export const SectionContent = () => {
	return (
		<>
			<Parallax>
				<section className="about">
					<div className="about-title">
						<SectionCard />
					</div>
					<div className="about-pages justify-content-center">
						<div>
							<SectionCardFeaturesOne />
						</div>
						<SectionCardFeaturesTwo />
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
