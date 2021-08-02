import React from "react";
import "../../styles/dashboard.scss";
import { SideNav } from "../component/SideNav";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { DetailedSymptom } from "../component/DetailedSymptom";

export const DashboardSymptomDetails = props => {
	return (
		<div className="dashboard-wrapper d-flex">
			<div className="side-nav">
				<SideNav loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
			</div>
			<div className="medication-column container-fluid">
				<DetailedSymptom />
			</div>
			{props.loggedIn ? "" : <Redirect to="SignIn" />}
		</div>
	);
};

DashboardSymptomDetails.propTypes = {
	loggedIn: PropTypes.bool,
	setLoggedIn: PropTypes.func
};
