import React from "react";
import "../../styles/dashboard.scss";
import { SideNav } from "../component/SideNav";
import { YourVitals } from "../component/YourVitals";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export const DashboardVitals = props => {
	return (
		<div className="dashboard-wrapper d-flex">
			<div className="side-nav">
				<SideNav loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
			</div>
			<div className="medication-column">
				<YourVitals />
			</div>
			{props.loggedIn ? "" : <Redirect to="SignIn" />}
		</div>
	);
};
DashboardVitals.propTypes = {
	loggedIn: PropTypes.bool,
	setLoggedIn: PropTypes.func
};
