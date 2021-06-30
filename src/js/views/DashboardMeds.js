import React from "react";
import "../../styles/dashboard.scss";
import { SideNav } from "../component/SideNav";
import { YourMedications } from "../component/YourMedications";

export const DashboardMeds = () => {
	return (
		<div className="dashboard-wrapper d-flex">
			<div className="side-nav">
				<SideNav />
			</div>
			<div className="medication-column">
				<YourMedications />
			</div>
		</div>
	);
};
