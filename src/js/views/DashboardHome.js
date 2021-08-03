import React, { useState, useEffect, useContext } from "react";
import "../../styles/dashboardHome.scss";
import { SideNav } from "../component/SideNav";
import { SmallMedCard } from "../component/SmallMedCard";
import { SmallVisitCard } from "../component/SmallVisitCard";
import { LineGraph } from "../component/LineGraph";
import { GlobalState } from "../store/appContext";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { BarGraph } from "../component/BarGraph";
import { Link, useLocation } from "react-router-dom";
import { SmallSympCard } from "../component/SmallSympCard";

export const DashboardHome = props => {
	const { store, actions } = useContext(GlobalState);
	console.log(store);
	return (
		<div className="container-fluid m-0 p-0 d-flex linear-bg">
			<div className="side-nav">
				<SideNav loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
			</div>
			<div className="dashboard p-0 m-0 w-100">
				<div className="row d-flex justify-content-center" style={{ height: "100vh" }}>
					<div className="col-4 your-symptoms-box">
						<h1 className="section-title text-center my-3">Symptoms</h1>
						{store.allUserSymptoms &&
							store.allUserSymptoms.map((symptom, index) => (
								<Link
									key={index}
									to={{
										pathname: "/DashboardSymptomDetails/" + symptom.id,
										state: {
											symptom
										}
									}}>
									<SmallSympCard
										key={index}
										entity={symptom}
										id={store.allUserSymptoms[index].id}
										onDelete={() => stateSetter(symptom.id)}
									/>
								</Link>
							))}
					</div>
					<div className="col-4 your-medications-box">
						<h1 className="section-title text-center my-3">Medications</h1>
						{store.allUserMedications &&
							store.allUserMedications.map((medication, index) => (
								<Link
									key={index}
									to={{
										pathname: "/DashboardMedDetails/" + medication.id,
										state: {
											medication
										}
									}}>
									<SmallMedCard
										key={index}
										entity={medication}
										id={store.allUserMedications[index].id}
										onDelete={() => stateSetter(medication.id)}
									/>
								</Link>
							))}
					</div>
					<div className="col-4 your-visits-box">
						<h1 className="section-title text-center my-3">Doctor visits</h1>
						{store.allVisits &&
							store.allVisits.map((visit, index) => (
								<Link
									key={index}
									to={{
										pathname: "/DashboardVisitDetails/" + index,
										state: {
											visit
										}
									}}>
									<SmallVisitCard
										key={index}
										entity={visit}
										id={store.allVisits[index].id}
										index={index}
										onDelete={() => stateSetter(visit.id)}
									/>
								</Link>
							))}
					</div>
				</div>
			</div>
			{props.loggedIn ? "" : <Redirect to="SignIn" />}
		</div>
	);
};

DashboardHome.propTypes = {
	loggedIn: PropTypes.bool,
	setLoggedIn: PropTypes.func
};
