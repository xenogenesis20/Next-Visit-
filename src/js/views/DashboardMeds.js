import React from "react";
import "../../styles/dashboard.scss";
import { SideNav } from "../component/SideNav";
import { YourMedications } from "../component/YourMedications";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export const DashboardMeds = props => {
	return (
		<div className="dashboard-wrapper d-flex">
			<div className="side-nav">
				<SideNav loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
			</div>
			<div className="medication-column container-fluid">
				<YourMedications />
			</div>
			{props.loggedIn ? "" : <Redirect to="SignIn" />}
		</div>
	);
};
DashboardMeds.propTypes = {
	loggedIn: PropTypes.bool,
	setLoggedIn: PropTypes.func
};
