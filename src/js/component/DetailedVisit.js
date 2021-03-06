import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GlobalState } from "../store/appContext";
import PropTypes from "prop-types";

export const DetailedVisit = props => {
	const { store, actions } = useContext(GlobalState);
	const [visit, setVisit] = useState(store.allVisits[props.index]);

	return (
		<div className="container-fluid detailed-visit">
			<div className="row">
				<h2 className="text-center shadow">Doctor Visit</h2>
			</div>

			<div className="row">
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h2>Visiting: Dr. {visit.doctor}</h2>
						</div>
						<div className="card-body">
							<div className="row mb-4">
								<div className="list-group">
									<div className="list-group-item d-flex">
										<div className="d-flex w-100 justify-content-center">
											<h6 className="mb-1">Visit Date:</h6>
											<h6 className="mb-1">{visit.date}</h6>
										</div>
										<div className="d-flex w-100 justify-content-center border-start border-primary">
											<h6 className="mb-1">Visit Time:</h6>
											<h6 className="mb-1">{visit.time}</h6>
										</div>
									</div>
								</div>
							</div>
							<div className="row mb-4">
								<div className="list-group">
									<h4 className="p-3 border-bottom border-primary">Symptoms</h4>
									<table className="table">
										<thead>
											<tr>
												<th scope="col">Symptom</th>
												<th scope="col">Started</th>
												<th scope="col">Location</th>
												<th scope="col">Frequency</th>
												<th scope="col">Duration</th>
											</tr>
										</thead>
										<tbody>
											{visit.symptoms.map((symp, i) => {
												return (
													<>
														<tr key={i}>
															<td>{symp.symptomName}</td>
															<td>{symp.startDate}</td>
															<td>{symp.location}</td>
															<td>{symp.frequency}</td>
															<td>{symp.duration}</td>
														</tr>
														<tr>
															<td colSpan="5" className="p-0">
																<table className="table mb-0">
																	<thead>
																		<tr>
																			<th scope="col">
																				<h5>Symptom Notes:</h5>
																			</th>
																			<th scope="col">Date</th>
																			<th scope="col">Severity</th>
																			<th scope="col">Note</th>
																		</tr>
																	</thead>
																	<tbody>
																		{symp.notes.map((note, i) => {
																			return (
																				<tr key={i}>
																					<td></td>
																					<td>{note.date}</td>
																					<td>{note.severity}</td>
																					<td>{note.description}</td>
																				</tr>
																			);
																		})}
																	</tbody>
																</table>
															</td>
														</tr>
													</>
												);
											})}
										</tbody>
									</table>
								</div>
							</div>

							<div className="row mb-4">
								<div className="list-group">
									<h4 className="p-3 border-bottom border-primary">Medications</h4>
									<table className="table">
										<thead>
											<tr>
												<th scope="col">Medication</th>
												<th scope="col">Dose</th>
												<th scope="col">Frequency</th>
												<th scope="col">Reason</th>
												<th scope="col">Side effects</th>
											</tr>
										</thead>
										<tbody>
											{visit.meds.map((med, i) => {
												return (
													<>
														<tr key={i}>
															<td>{med.name}</td>
															<td>{med.dose}</td>
															<td>{med.frequency}</td>
															<td>{med.reason}</td>
															<td>{med.side_effects}</td>
														</tr>
													</>
												);
											})}
										</tbody>
									</table>
								</div>
							</div>

							<div className="row mb-4">
								<div className="list-group">
									<h4 className="p-3 border-bottom border-primary">Vitals</h4>
									<table className="table">
										<thead>
											<tr>
												<th scope="col">Vital</th>
												<th scope="col">Date</th>
												<th scope="col">Value</th>
											</tr>
										</thead>
										<tbody>
											{visit.vitals.map((vital, i) => {
												return (
													<>
														<tr key={i}>
															<td>{vital.vitalName}</td>
															<td>{vital.date}</td>
															<td>{vital.value}</td>
														</tr>
													</>
												);
											})}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Link to="/DashboardHome">
				<button className="btn btn-primary mt-5">Back to Dashboard</button>
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
