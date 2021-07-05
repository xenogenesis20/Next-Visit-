import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.scss";
import { SingleVitalCard } from "./SingleVitalCard";
import * as mdb from "mdb-ui-kit"; // lib
import { GlobalState } from "../store/appContext";

export const YourVitals = () => {
	const { store, actions } = useContext(GlobalState);
	const [vitalList, setVitalList] = useState([]);
	const [vitals, setVitals] = useState({
		height: "",
		weight: "",
		heartRate: "",
		bloodPressure: "",
		bloodType: "",
		bodyTemperature: "",
		oxySaturation: ""
	});
	const handleInput = e => {
		setVitals({ ...vitals, [e.target.name]: e.target.value });
	};
	const confirmNewVital = vital => {
		actions.addUserVital(vital);
	};
	useEffect(() => {
		document.querySelectorAll(".form-outline").forEach(formOutline => {
			new mdb.Input(formOutline).update();
		}, []);
	});
	let dynamicValue = "adde";
	const getVitalList = dynamicValue => {
		useEffect(() => {
			fetch(``)
				.then(function(response) {
					if (!response.ok) {
						throw Error(response.statusText);
					}
					// Read the response as json.
					return response.json();
				})
				.then(function(responseAsJson) {
					// Do stuff with the JSON
					console.log("response log", responseAsJson.results);
					setVitalList(responseAsJson.results);
				})
				.catch(function(err) {
					console.log("Fetch Error :-S", err);
				});
		}, []);
	};

	console.log("second log", vitalList);

	return (
		<>
			<h1>Your Vitals</h1>
			<button type="button" className="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
				Add a new vital.
			</button>
			{store.allUserVitals &&
				store.allUserVitals.map((vital, index) => (
					<SingleVitalCard key={vital.id} entity={vital} onDelete={() => stateSetter(vital.id)} />
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
								Add a vital
							</h5>
							<button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close" />
						</div>
						<div className="modal-body">
							<form>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="rxterms"
										className="form-control"
										name="medicationName"
										onChange={handleInput}
									/>
									<label className="form-label" htmlFor="rxterms">
										Vital Name
									</label>
									<div>Suggetions here? </div>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="drug_strength"
										className="form-control"
										name="dose"
										onChange={handleInput}
									/>
									<label className="form-label" htmlFor="drug_strength">
										Current dose
									</label>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="number"
										id="frequency-input"
										className="form-control"
										name="frequency"
										onChange={handleInput}
									/>
									<label className="form-label" htmlFor="frequency-input">
										How often do you take it
									</label>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="reason-input"
										className="form-control"
										name="reason"
										onChange={handleInput}
									/>
									<label className="form-label" htmlFor="reason-input">
										Reason for medication
									</label>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="sideEffects-input"
										className="form-control"
										name="sideEffects"
										onChange={handleInput}
									/>
									<label className="form-label" htmlFor="sideEffects-input">
										Side effects
									</label>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
								Cancel
							</button>
							<button type="button" className="btn btn-primary" onClick={() => confirmNewVital(vitals)}>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
