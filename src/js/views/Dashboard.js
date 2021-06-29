import React from "react";
import "../../styles/dashboard.scss";
import { SideNav } from "../component/SideNav";

export const Dashboard = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-1">
						<SideNav />
					</div>
					<div className="col symptom-column">symptoms</div>
					<div className="col medication-column">medications</div>
				</div>
				<div className="row">
					<div className="col chart-column">Charts</div>
				</div>
			</div>
		</>
	);
};
