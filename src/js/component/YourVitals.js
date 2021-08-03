import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.scss";
import { SingleVitalCard } from "./SingleVitalCard";
import * as mdb from "mdb-ui-kit"; // lib
import { GlobalState } from "../store/appContext";

export const YourVitals = () => {
	const { store, actions } = useContext(GlobalState);
	const [vitalList, setVitalList] = useState([]);
	const [vitals, setVitals] = useState({});

	const handleInput = e => {
		setVitals({ ...vitals, [e.target.name]: e.target.value });
	};
	const confirmNewVital = vital => {
		actions.addUserVital(vital);
		setVitals({
			// id: store.allUserVitals.length,
			vitalName: "",
			value: 0,
			date: ""
		});
	};

	useEffect(() => {
		document.querySelectorAll(".form-outline").forEach(formOutline => {
			new mdb.Input(formOutline).update();
		}, []);
	});
	// let dynamicValue = "adde";
	// const getVitalList = dynamicValue => {
	// 	useEffect(() => {
	// 		fetch(``)
	// 			.then(function(response) {
	// 				if (!response.ok) {
	// 					throw Error(response.statusText);
	// 				}
	// 				// Read the response as json.
	// 				return response.json();
	// 			})
	// 			.then(function(responseAsJson) {
	// 				// Do stuff with the JSON
	// 				console.log("response log", responseAsJson.results);
	// 				setVitalList(responseAsJson.results);
	// 			})
	// 			.catch(function(err) {
	// 				console.log("Fetch Error :-S", err);
	// 			});
	// 	}, []);
	// };

	console.log("second log", vitalList);

	return (
		<>
			<div className="row">
				<div className="col">
					<h1>Your Vitals</h1>
					<div />
					<button
						type="button"
						className="btn btn-primary"
						data-mdb-toggle="modal"
						data-mdb-target="#exampleModal">
						Add a new vital.
					</button>
				</div>
			</div>
			{store.allUserVitals &&
				store.allUserVitals.map((vital, index) => (
					<SingleVitalCard
						key={index}
						entity={vital}
						id={store.allUserVitals[index].id}
						onDelete={() => stateSetter(vital.id)}
					/>
				))}
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Add a Vital
							</h5>
							<button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close" />
						</div>
						<div className="modal-body">
							<form>
								<div className="form-group bg-light mb-3 p-1">
									<label htmlFor="exampleFormControlSelect1">Vital Name</label>
									<select
										className="form-control"
										id="exampleFormControlSelect1"
										name="vitalName"
										onChange={handleInput}>
										<option selected disabled>
											Select Vital
										</option>

										<option>Weight</option>
										<option>Height</option>
										<option>Blood Pressure</option>
										<option>Heart Rate</option>
									</select>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="date"
										id="drug_strength"
										className="form-control"
										name="date"
										onChange={handleInput}
									/>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="frequency-input"
										className="form-control"
										name="value"
										onChange={handleInput}
									/>
									<label className="form-label" htmlFor="frequency-input">
										Value
									</label>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
								Cancel
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={() => {
									confirmNewVital(vitals);
									// console.log(actions.sortVitals("Date", Date.now()));
								}}>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
