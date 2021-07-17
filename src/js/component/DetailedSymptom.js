import React from "react";
import { Link, useLocation } from "react-router-dom";

export const DetailedSymptom = () => {
	const location = useLocation();
	console.log(location.state.symptom);

	return (
		<div className="container ">
			<div className="row">
				<div className="col-12">
					<h1>{location.state.symptom.symptomName}</h1>
				</div>
			</div>
			{/* duration: "all day"
frequency: "constant"
id: 123124
location: "butt"
notes: []
severity: "10"
startDate: "07/12/21"
symptomName: "broken butt" */}
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
								<th scope="col">#</th>
								<th scope="col">Date</th>
								<th scope="col">Severity</th>
								<th scope="col">Note</th>
							</tr>
						</thead>
						<tbody>
							{location.state.symptom.notes.map((val, i) => {
								return (
									<tr key={i}>
										<th scope="row">1</th>
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
