import React from "react";
import "../../styles/dashboard.scss";
import { SideNav } from "../component/SideNav";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { DetailedVisit } from "../component/DetailedVisit";

export const DashboardVisitDetails = props => {
	return (
		<div className="dashboard-wrapper d-flex">
			<div className="side-nav">
				<SideNav loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
			</div>
			<div className="medication-column container-fluid">
				<DetailedVisit />
			</div>
			{props.loggedIn ? "" : <Redirect to="SignIn" />}
		</div>
	);
};
DashboardVisitDetails.propTypes = {
	loggedIn: PropTypes.bool,
	setLoggedIn: PropTypes.func
};
