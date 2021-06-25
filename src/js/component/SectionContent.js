import React, { useRef } from "react";
import { gsap } from "gsap";
import { useIntersection } from "react-use";

import { SectionCard } from "./SectionCard";
import { SectionCardFeaturesOne } from "./SectionCardFeaturesOne";
import { SectionCardFeaturesTwo } from "./SectionCardFeaturesTwo";
import { SectionCardFeaturesThree } from "./SectionCardFeaturesThree";

export const SectionContent = () => {
	const sectionRef = useRef(null);

	// const intersection = useIntersection(sectionRef, {
	// 	root: null,
	// 	rootMargin: "0px",
	// 	threshold: 0.2
	// });

	// const fadeIn = element => {
	// 	gsap.to(element, 1, {
	// 		opacity: 1,
	// 		y: -20,
	// 		ease: "power4.out",
	// 		stagger: {
	// 			amount: 0.3
	// 		}
	// 	});
	// };
	// const fadeOut = element => {
	// 	gsap.to(element, 1, {
	// 		opacity: 0,
	// 		y: -20,
	// 		ease: "power4.out"
	// 	});
	// };

	// intersection && intersection.intersectionRatio < 0.2 ? fadeOut(".fadeIn") : fadeIn(".fadeIn");

	return (
		<>
			<div className=" container" ref={sectionRef}>
				<div className="row">
					<div className="col-12">
						<SectionCard />
					</div>
				</div>
				<div className="row">
					<div className="col">
						<SectionCardFeaturesOne />
					</div>
					<div className="col">
						<SectionCardFeaturesTwo />
					</div>
					<div className="col">
						<SectionCardFeaturesThree />
					</div>
				</div>
			</div>
		</>
	);
};
