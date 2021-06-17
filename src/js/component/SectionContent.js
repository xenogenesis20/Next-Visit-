import React, { useRef } from "react";
import { gsap } from "gsap";
import { useIntersection } from "react-use";

import { SectionCard } from "./SectionCard";
import { SectionCardFeaturesOne } from "./SectionCardFeaturesOne";
import { SectionCardFeaturesTwo } from "./SectionCardFeaturesTwo";
import { SectionCardFeaturesThree } from "./SectionCardFeaturesThree";

export const SectionContent = () => {
	const sectionRef = useRef(null);

	const intersection = useIntersection(sectionRef, {
		root: null,
		rootMargin: "0px",
		threshold: 0.2
	});

	const fadeIn = element => {
		gsap.to(element, 1, {
			opacity: 1,
			y: -20,
			ease: "power4.out",
			stagger: {
				amount: 0.3
			}
		});
	};
	const fadeOut = element => {
		gsap.to(element, 1, {
			opacity: 0,
			y: -20,
			ease: "power4.out"
		});
	};

	intersection && intersection.intersectionRatio < 0.2 ? fadeOut(".fadeIn") : fadeIn(".fadeIn");

	return (
		<>
			<section className="about fadeIn" ref={sectionRef}>
				<div className="about-title">
					<SectionCard />
				</div>
				<div className="about-pages justify-content-center">
					<div>
						<SectionCardFeaturesOne />
					</div>
					<div>
						<SectionCardFeaturesTwo />
					</div>
					<div>
						<SectionCardFeaturesThree />
					</div>
				</div>
			</section>
		</>
	);
};
