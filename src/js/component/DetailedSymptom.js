import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { GlobalState } from "../store/appContext";

export const DetailedSymptom = () => {
	const { store, actions } = useContext(GlobalState);
	const location = useLocation();
	console.log(location.state.symptom);

	return (
		<div className="container ">
			<div className="row">
				<div className="col-12">
					<h1>{location.state.symptom.symptomName}</h1>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<p>This symptom occurs so often: {location.state.symptom.frequency}</p>
					<p>The location where I am experiencing this symptom: {location.state.symptom.location}</p>
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
							{location.state.symptom.notes.map((val, i) => {
								return (
									<tr key={i}>
										<td>{val.date}</td>
										<td>{val.severity}</td>
										<td>{val.description}</td>
									</tr>
								);
							})}
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
