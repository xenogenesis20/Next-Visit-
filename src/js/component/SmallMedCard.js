import React from "react";
import "../../styles/SmallMedCard.scss";

export const SmallMedCard = () => {
	return (
		<div className="card text-center text-white m-1 single-med-card" style={{ width: "50%", height: "15%" }}>
			<div className="card-body d-flex justify-content-around align-items-center p-0">
				<p className="card-title">Med name</p>
				<p className="card-title">50mg</p>
				<p className="card-title">2 bid</p>
			</div>
		</div>
	);
};
