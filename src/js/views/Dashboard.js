import React from "react";
import "../../styles/dashboard.scss";
import { SideNav } from "../component/SideNav";
import { YourMedications } from "../component/YourMedications";

export const Dashboard = () => {
	return (
		<div className="dashboard-wrapper d-flex">
			<div className="side-nav">
				<SideNav />
			</div>
			<div className="your-medications-box">
				<YourMedications />
			</div>
		</div>
	);
};
