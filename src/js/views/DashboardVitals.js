import React, { useEffect, useState, useContext } from "react";
import { GlobalState } from "../store/appContext";
import "../../styles/dashboard.scss";
import { SideNav } from "../component/SideNav";
import { YourVitals } from "../component/YourVitals";
import { BarGraph } from "../component/BarGraph";
import { VitalStatistics } from "../component/VitalStatistics";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export const DashboardVitals = props => {
	const { store, actions } = useContext(GlobalState);
	// console.log(actions.thirtyDMA("Vital Name", "Weight"));

	return (
		<div className="container-fluid m-0 p-0 d-flex linear-bg">
			<div className="side-nav">
				<SideNav loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
			</div>
			<div className="container-fluid p-0 m-0">
				<div className="row g-0 p-0 m-0 med-and-symptom-row">
					<div className="col-6 your-symptoms-box">
						Vitals
						<div className="medication-column container-fluid">
							<YourVitals />
						</div>
					</div>
					<div className="col-6 your-medications-box d-flex flex-wrap">
						<VitalStatistics />
					</div>
				</div>
				<div className="row charts-row g-0 p-0 m-0">
					<div className="col-12 ">Charts go here</div>
					<div>
						<BarGraph />
					</div>
				</div>
			</div>
			{props.loggedIn ? "" : <Redirect to="SignIn" />}
		</div>
	);
};
DashboardVitals.propTypes = {
	loggedIn: PropTypes.bool,
	setLoggedIn: PropTypes.func
};
