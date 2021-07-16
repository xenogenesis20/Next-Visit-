import React from "react";
import { YourSymptoms } from "../component/YourSymptoms";
import { SideNav } from "../component/SideNav";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export const DashboardSymptoms = props => {
	return (
		<div className="dashboard-wrapper d-flex">
			<div className="side-nav">
				<SideNav loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
			</div>
			<div className="medication-column container-fluid">
				<YourSymptoms />
			</div>
			{props.loggedIn ? "" : <Redirect to="SignIn" />}
		</div>
	);
};
DashboardSymptoms.propTypes = {
	loggedIn: PropTypes.bool,
	setLoggedIn: PropTypes.func
};
