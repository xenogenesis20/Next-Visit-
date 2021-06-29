import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.scss";
import { SingleMedicationCard } from "../component/SingleMedicationCard";
import * as mdb from "mdb-ui-kit"; // lib
import { GlobalState } from "../store/appContext";

export const YourMedications = () => {
	const { store, actions } = useContext(GlobalState);
	const [medlist, setMedList] = useState([]);
	const [medications, setMedications] = useState({
		medicationName: "",
		dose: "",
		frequency: "",
		reason: "",
		sideEffects: ""
	});
	const handleInput = e => {
		setMedications({ ...medications, [e.target.name]: e.target.value });
	};
	const confirmNewMedication = med => {
		actions.addUserMedication(med);
	};
	useEffect(() => {
		document.querySelectorAll(".form-outline").forEach(formOutline => {
			new mdb.Input(formOutline).update();
		}, []);
	});
	let dynamicValue = "adde";
	const getMedList = dynamicValue => {
		useEffect(() => {
			fetch(`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?sf=DISPLAY_NAME&terms=${dynamicValue}`)
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
					setMedList(responseAsJson.results);
				})
				.catch(function(err) {
					console.log("Fetch Error :-S", err);
				});
		}, []);
	};

	console.log("second log", medlist);

	return (
		<div className="container-fluid">
			<h1>Your Medications</h1>
			<button type="button" className="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
				Add a new medication.
			</button>
			<div className="row">
				<div className="col-6">
					{store.allUserMedications &&
						store.allUserMedications.map((medication, index) => (
							<SingleMedicationCard
								key={medication.id}
								entity={medication}
								onDelete={() => stateSetter(medication.id)}
							/>
						))}
				</div>
			</div>

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
								Add a medication
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
										Medication name
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
							<button
								type="button"
								className="btn btn-primary"
								onClick={() => confirmNewMedication(medications)}>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
