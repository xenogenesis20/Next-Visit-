import React from "react";
import { Link } from "react-router-dom";
import dmmeds from "../../img/DBmeds.jpg";
import dbsymp from "../../img/dbsymp.jpg";
import drvis from "../../img/drvis.jpg";
import gif from "../../img/Animation.gif";
export const SectionCardFeaturesTwo = () => {
	return (
		<div className="">
			<div className="row">
				<div className="col m-2">
					<img className="m-2 p-2 rounded-img" src={dmmeds} alt="" />
				</div>
				<div className="col m-2">
					<img className="m-2 p-2 rounded-img" src={dbsymp} alt="" />
				</div>
			</div>
			<div className="row">
				<div className="col m-2">
					<img className="m-2 p-2 rounded-img" src={drvis} alt="" />
				</div>
				<div className="col m-2">
					<img className="m-2 p-2 rounded-img" src={gif} alt="" />
				</div>
			</div>
		</div>
	);
};
