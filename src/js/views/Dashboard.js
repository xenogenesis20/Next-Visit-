import React from "react";
import "../../styles/dashboard.scss";

export const Dashboard = () => {
	return (
		<div className="container centered">
			<div className="row">
				<div className="col-6 symptom-column">symptoms</div>
				<div className="col-6 medication-column">medications</div>
			</div>
			<div className="row">
				<div className="col chart-column">Charts</div>
			</div>
		</div>
	);
};
