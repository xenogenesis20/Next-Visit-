import React from "react";
import "../../styles/dashboardHome.scss";
import { SideNav } from "../component/SideNav";
import { SmallMedCard } from "../component/SmallMedCard";

export const DashboardHome = () => {
	return (
		<div className="container-fluid m-0 p-0 d-flex linear-bg">
			<div className="side-nav">
				<SideNav />
			</div>
			<div className="container-fluid p-0 m-0">
				<div className="row g-0 p-0 m-0 med-and-symptom-row">
					<div className="col-6 your-symptoms-box">symptom summary / list</div>
					<div className="col-6 your-medications-box d-flex flex-wrap">
						<SmallMedCard />
						<SmallMedCard />
						<SmallMedCard />
						<SmallMedCard />
						<SmallMedCard />
						<SmallMedCard />
						<SmallMedCard />
					</div>
				</div>
				<div className="row charts-row g-0 p-0 m-0">
					<div className="col-12 ">Charts go here</div>
				</div>
			</div>
		</div>
	);
};
