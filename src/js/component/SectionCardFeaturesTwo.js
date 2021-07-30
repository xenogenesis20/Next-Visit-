import React from "react";
import { Link } from "react-router-dom";
import dmmeds from "../../img/DBmeds.jpg";
import dbsymp from "../../img/dbsymp.jpg";
import drvis from "../../img/drvis.jpg";
export const SectionCardFeaturesTwo = () => {
	return (
		<div className="">
			<div className="row">
				<div className="col">
					<img src={dmmeds} alt="" />
				</div>
				<div className="col">
					<img src={dbsymp} alt="" />
				</div>
			</div>
			<div className="row">
				<div className="col">
					<img src={drvis} alt="" />
				</div>
				<div className="col">img4</div>
			</div>
		</div>
	);
};
