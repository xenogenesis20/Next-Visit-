import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GlobalState } from "../store/appContext";
import PropTypes from "prop-types";

export const DetailedVisit = props => {
	const { store, actions } = useContext(GlobalState);
	const [visit, setVisit] = useState(store.allVisits[props.index]);

	return (
		<div className="container ">
			<div className="row">
				<h2>Doctor Visit</h2>
				<div className="col-12">
					<h2> Visiting: Dr {visit.doctor}</h2>
					<h3> Visit Date: {visit.date}</h3>
					<h3> Visit Time: {visit.time}</h3>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					{visit.symptoms &&
						visit.symptoms.map((symp, ind) => {
							console.log(symp);
							return (
								<div key={ind}>
									<div className="card">
										<div className="card-header">
											<h2>Symptom {symp.symptomName}</h2>
										</div>
										<div className="card-body">
											<div className="list-group">
												<div className="list-group-item">
													<div className="d-flex w-100 justify-content-around">
														<h6 className="mb-1">Start Date:</h6>
														<h6 className="mb-1">{symp.startDate} </h6>
													</div>
												</div>
												<div className="list-group-item">
													<div className="d-flex w-100 justify-content-around">
														<h6 className="mb-1">How severe is the symptom:</h6>
														<h6 className="mb-1">{symp.severity}</h6>
													</div>
												</div>
												<div className="list-group-item">
													<div className="d-flex w-100 justify-content-around">
														<h6 className="mb-1">Symptom location:</h6>
														<h6 className="mb-1">{symp.location}</h6>
													</div>
												</div>
												<div className="list-group-item">
													<div className="d-flex w-100 justify-content-around">
														<h6 className="mb-1">Symptom Frequency:</h6>
														<h6 className="mb-1">{symp.frequency}</h6>
													</div>
												</div>
												<div className="list-group-item">
													<div className="d-flex w-100 justify-content-around">
														<h6 className="mb-1">Symptom Duration:</h6>
														<h6 className="mb-1">{symp.duration}</h6>
													</div>
												</div>
												<div className="list-group-item">
													<span>NOTES:</span>
													{symp.notes.map((sympNote, i) => {
														return (
															<div
																key={i}
																className="d-flex w-100 justify-content-around">
																<h6 className="mb-1">Date: {sympNote.date}</h6>
																<h6 className="mb-1">{sympNote.description}</h6>
															</div>
														);
													})}
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
			<div className="row">
				<div className="col">
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Date</th>
								<th scope="col">Severity</th>
								<th scope="col">Note</th>
							</tr>
						</thead>
						<tbody>
							{/* {location.state.visit.symptoms[0].notes.map((val, i) => {
								return (
									<tr key={i}>
										<td>{val.date}</td>
										<td>{val.severity}</td>
										<td>{val.description}</td>
									</tr>
								);
							})} */}
						</tbody>
					</table>
				</div>
			</div>
			<Link to="/DashboardHome">
				<button className="btn btn-primary">Back to Dashboard</button>
			</Link>
			<div className="row">
				<div />
			</div>
		</div>
	);
};

DetailedVisit.propTypes = {
	index: PropTypes.number
};
