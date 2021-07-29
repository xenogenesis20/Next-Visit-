import React, { useEffect, useState, useContext } from "react";
import { GlobalState } from "../store/appContext";
import "../../styles/dashboard.scss";
import { SideNav } from "../component/SideNav";
import { YourVitals } from "../component/YourVitals";
import { BarGraphWeight } from "../component/BarGraphWeight";
import { BarGraphHeight } from "../component/BarGraphHeight";
import { BarGraphHeartRate } from "../component/BarGraphHeartRate";
import { BarGraphBloodPressure } from "../component/BarGraphBloodPressure";
import { VitalStatistics } from "../component/VitalStatistics";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export const DashboardVitals = props => {
	const { store, actions } = useContext(GlobalState);

	// console.log(actions.thirtyDMA("Vital Name", "Weight"));

	return (
		<div className="dashboard-wrapper d-flex">
			<div className="side-nav">
				<SideNav loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
			</div>
			<div className="medication-column container-fluid">
				<div className="row d-block g-0 p-0 m-0 med-and-symptom-row">
					<YourVitals />

					<VitalStatistics />
				</div>
				<div className="row d-block">
					<div className="col-12 ">Charts go here</div>
					<div>
						<BarGraphWeight />
                        <BarGraphBloodPressure />
                        <BarGraphHeight />
                        <BarGraphHeartRate />
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
