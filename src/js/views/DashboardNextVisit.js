import React from "react";
import "../../styles/dashboard.scss";
import { SideNav } from "../component/SideNav";
import { NextVisit } from "../component/NextVisit_copy";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export const DashboardNextVisit = props => {
	return (
		<div className="dashboard-wrapper d-flex">
			<div className="side-nav">
				<SideNav loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
			</div>
			<div className="medication-column container-fluid">
				<NextVisit />
			</div>
			{props.loggedIn ? "" : <Redirect to="SignIn" />}
		</div>
	);
};
DashboardNextVisit.propTypes = {
	loggedIn: PropTypes.bool,
	setLoggedIn: PropTypes.func
};
