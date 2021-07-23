import React from "react";
import { Link, useLocation } from "react-router-dom";

export const DetailedVisit = () => {
	const location = useLocation();
	console.log(location.state.visit);

	return (
		<div className="container ">
			<div className="row">
				<div className="col-12">
					<h2> Visitng :{location.state.visit.doctor}</h2>
					<h2> Visit Date :{location.state.visit.date}</h2>
					<h2> Visit Time :{location.state.visit.time}</h2>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<p>This symptom occurs so often: {"location.state.symptom.frequency"}</p>
					<p>The location where I am experiencing this symptom: {"location.state.symptom.location"}</p>
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
							{location.state.visit.symptoms[0].notes.map((val, i) => {
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
